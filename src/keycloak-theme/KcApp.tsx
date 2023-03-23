import { lazy, Suspense } from "react";
import type { KcContext } from "./kcContext";
import { useI18n } from "./i18n";
import Fallback, { defaultKcProps, type KcProps, type PageProps } from "keycloakify";
import {useDownloadTerms} from "keycloakify/lib/pages/Terms";
import Template from "keycloakify/lib/Template";
import tos_en_url from "./assets/tos_en.md";
import tos_fr_url from "./assets/tos_fr.md";

// You can uncomment this to see the values passed by the main app before redirecting.  
//import { foo, bar } from "./valuesTransferredOverUrl";
//console.log(`Values passed by the main app in the URL parameter:`, { foo, bar });

const Empty = lazy(()=> import("./pages/Empty"));

// This is like editing the theme.properties 
// https://github.com/keycloak/keycloak/blob/11.0.3/themes/src/main/resources/theme/keycloak/login/theme.properties
const kcProps: KcProps = {
    ...defaultKcProps,
    // NOTE: The classes are defined in ./KcApp.css
    // You can add your classes alongside thoses that are present in the default Keycloak theme...
    "kcHtmlClass": [...defaultKcProps.kcHtmlClass, "my-root-class"],
    // ...or overwrite  
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

    const pageProps: Omit<PageProps<any, typeof i18n>, "kcContext"> = {
        i18n,
        // Here we have overloaded the default template, however you could use the default one with:  
        //Template: DefaultTemplate,
        Template,
        // Wether or not we should download the CSS and JS resources that comes with the default Keycloak theme.  
        doFetchDefaultThemeResources: true,
        ...kcProps,
    };

    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                    case "empty.ftl": return <Empty {...{ kcContext, ...pageProps }} />;
                    default: return <Fallback {...{ kcContext, ...pageProps }} />;
                }
            })()}
        </Suspense>
    );

}
