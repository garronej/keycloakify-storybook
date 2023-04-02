import type { PageProps } from "keycloakify/login";
import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";

export default function Empty(props: PageProps<Extract<KcContext, { pageId: "empty.ftl"; }>, I18n>) {

    const { kcContext, i18n, doUseDefaultCss = true, Template, classes: classes_props } = props;

    return (
        <Template
            {...{ kcContext, i18n, doUseDefaultCss, classes: classes_props }}
            headerNode={<>Header <i>text</i></>}
            infoNode={<span>footer</span>}
        >
            <h3>children</h3>
        </Template>
    );
}
