import { ComponentMeta } from '@storybook/react';
import KcApp from '../KcApp';
import { template } from '../../../../.storybook/util'

const bind = template('select-authenticator.ftl');

export default {
    kind: 'Page',
    title: 'Theme/Pages/Login/SelectAuthenticator',
    component: KcApp,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof KcApp>;

export const Default = bind({});
export const WithDifferentAuthenticationMethods = bind({
    auth: {
        authenticationSelections: [
            {
                authExecId: "25697c4e-0c80-4f2c-8eb7-2c16347e8e8d",
                displayName: "auth-username-password-form-display-name",
                helpText: "auth-username-password-form-help-text",
                iconCssClass: "kcAuthenticatorPasswordClass"
            },
            {
                authExecId: "4cb60872-ce0d-4c8f-a806-e651ed77994b",
                displayName: "webauthn-passwordless-display-name",
                helpText: "webauthn-passwordless-help-text",
                iconCssClass: "kcAuthenticatorWebAuthnPasswordlessClass"
            }
        ]
    }
});
