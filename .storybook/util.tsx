import type {KcContext} from "keycloakify/login/kcContext";
import {getKcContext} from "keycloakify/login/kcContext/getKcContext";
import type {ExtendKcContext} from "keycloakify/login/kcContext/getKcContextFromWindow";
import type {KcContextExtension} from "../src/keycloak-theme/login/kcContext";
import KcApp from "../src/keycloak-theme/login/KcApp";
import type {DeepPartial} from "keycloakify/src/tools/DeepPartial";
import { assert } from "tsafe/assert";

export const socialProviders = [
    {loginUrl: 'google', alias: 'google', providerId: 'google', displayName: 'Google'},
    {loginUrl: 'microsoft', alias: 'microsoft', providerId: 'microsoft', displayName: 'Microsoft'},
    {loginUrl: 'facebook', alias: 'facebook', providerId: 'facebook', displayName: 'Facebook'},
    {loginUrl: 'instagram', alias: 'instagram', providerId: 'instagram', displayName: 'Instagram'},
    {loginUrl: 'twitter', alias: 'twitter', providerId: 'twitter', displayName: 'Twitter'},
    {loginUrl: 'linkedin', alias: 'linkedin', providerId: 'linkedin', displayName: 'LinkedIn'},
    {loginUrl: 'stackoverflow', alias: 'stackoverflow', providerId: 'stackoverflow', displayName: 'Stackoverflow'},
    {loginUrl: 'github', alias: 'github', providerId: 'github', displayName: 'Github'},
    {loginUrl: 'gitlab', alias: 'gitlab', providerId: 'gitlab', displayName: 'Gitlab'},
    {loginUrl: 'bitbucket', alias: 'bitbucket', providerId: 'bitbucket', displayName: 'Bitbucket'},
    {loginUrl: 'paypal', alias: 'paypal', providerId: 'paypal', displayName: 'PayPal'},
    {loginUrl: 'openshift', alias: 'openshift', providerId: 'openshift', displayName: 'OpenShift'},
]

type PageId = (KcContextExtension | KcContext)['pageId']

export const template = (pageId: PageId) => {
    type MockData = DeepPartial<ExtendKcContext<KcContextExtension>>;

    const Template = (mockData: MockData) => {
        const finalMockData = {
            message: undefined,
            pageId,
            ...mockData
        } as MockData
        if (!("message" in mockData)) mockData["message"] = undefined
        const {kcContext} = getKcContext<KcContextExtension>({mockPageId: pageId, mockData: [finalMockData]})
        assert(kcContext !== undefined);
        return <KcApp kcContext={kcContext}/>
    }

    return (args: MockData) => Object.assign(Template.bind({}), {args})
}

