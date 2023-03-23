import type { PageProps } from "keycloakify";
import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";

export default function Empty(props: PageProps<Extract<KcContext, { pageId: "empty.ftl"; }>, I18n>) {

    const { kcContext, i18n, doFetchDefaultThemeResources = true, Template, ...kcProps } = props;

    return (
        <Template
            {...{ kcContext, i18n, doFetchDefaultThemeResources, ...kcProps }}
            headerNode={<>Header <i>text</i></>}
            formNode={
                <h3>children</h3>
            }
            infoNode={<span>footer</span> }
        />
    );

}
