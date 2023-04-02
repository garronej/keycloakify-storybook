import { lazy, Suspense } from "react";
import type { KcContext } from "./kcContext";
import { useI18n } from "./i18n";
import Fallback, { type PageProps } from "keycloakify/login";
import {useDownloadTerms} from "keycloakify/login/lib/useDownloadTerms";
import tos_en_url from "./assets/tos_en.md";
import tos_fr_url from "./assets/tos_fr.md";

const DefaultTemplate = lazy(() => import("keycloakify/login/Template"));

// You can uncomment this to see the values passed by the main app before redirecting.  
//import { foo, bar } from "./valuesTransferredOverUrl";
//console.log(`Values passed by the main app in the URL parameter:`, { foo, bar });

const Empty = lazy(()=> import("./pages/Empty"));

// This is like adding classes to theme.properties 
// https://github.com/keycloak/keycloak/blob/11.0.3/themes/src/main/resources/theme/keycloak/login/theme.properties
const classes: PageProps<any, any>["classes"] = {
    // NOTE: The classes are defined in ./KcApp.css
    "kcHtmlClass": "my-root-class",
    "kcHeaderWrapperClass": "my-color my-font"
};

export default function App(props: { kcContext: KcContext; }) {

    const { kcContext } = props;

    const i18n = useI18n({ kcContext });

    useDownloadTerms({
        "kcContext": kcContext as any,
        "downloadTermMarkdown": async ({currentLanguageTag}) => {

            const resource = (() => {
                switch (currentLanguageTag) {
                    case "fr":
                        return tos_fr_url;
                    default:
                        return tos_en_url;
                }
            })();

            // webpack5 (used via storybook) loads markdown as string, not url
            if (resource.includes("\n")) return resource

            const response = await fetch(resource);
            return response.text();
        },
    });

    if (i18n === null) {
        //NOTE: Locales not yet downloaded, we could as well display a loading progress but it's usually a matter of milliseconds.
        return null;
    }
    
    /* 
    * Examples assuming i18n.currentLanguageTag === "en":
    * i18n.msg("access-denied") === <span>Access denied</span>
    * i18n.msg("foo") === <span>foo in English</span>
    */

    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                    case "empty.ftl": return <Empty {...{ kcContext, i18n, classes }} Template={DefaultTemplate} doUseDefaultCss />;
                    default: return <Fallback {...{ kcContext, i18n, classes }} Template={DefaultTemplate} doUseDefaultCss />;
                }
            })()}
        </Suspense>
    );
}
