// @ts-ignore
import * as opsgenie from 'opsgenie-sdk';
import axios from 'axios';
import config from '../config';
import {
    AlertCreate,
    ResponseResult,
    ListAlertParams,
    ResponseResultWithData,
    Alert,
    Team,
    Identifier,
    AlertAssign,
    OpsUser,
    AlertSnooze,
    AlertNote,
    ListIntegrationsParams,
    Integration,
    Account,
    Teams, AlertUnack, AlertAck
} from '../types';
import {Routes} from '../constant';
import {replace, tryPromiseOpsgenieWithMessage} from '../utils/utils';

export type OpsGenieOptions = {
    api_key: string;
}

export class OpsGenieClient {
    private readonly options: OpsGenieOptions | undefined;

    constructor(
        options?: OpsGenieOptions
    ) {
        this.options = options;
    }

    public getAccount(): Promise<ResponseResultWithData<Account>> {
        const url: string = `${config.OPSGENIE.URL}${Routes.OpsGenie.APIVersionV2}${Routes.OpsGenie.AccountPathPrefix}`;
        const promise: Promise<any> = axios.get(url,{
            headers: {
                Authorization: `GenieKey ${this.options?.api_key}`
            },
            responseType: 'json'
        }).then((response) => response.data);

        return tryPromiseOpsgenieWithMessage(promise, 'OpsGenie failed');
    }

    public listIntegrations(params?: ListIntegrationsParams): Promise<ResponseResultWithData<Integration[]>> {
        const url: string = `${config.OPSGENIE.URL}${Routes.OpsGenie.APIVersionV2}${Routes.OpsGenie.IntegrationPathPrefix}`;
        const promise: Promise<any> = axios.get(url,{
            headers: {
                Authorization: `GenieKey ${this.options?.api_key}`
            },
            params,
            responseType: 'json'
        }).then((response) => response.data);

        return tryPromiseOpsgenieWithMessage(promise, 'OpsGenie failed');
    }

    public createAlert(alert: AlertCreate): Promise<ResponseResult> {
        const url: string = `${config.OPSGENIE.URL}${Routes.OpsGenie.APIVersionV2}${Routes.OpsGenie.AlertPathPrefix}`;
        const promise: Promise<any> =  axios.post(url, alert,{
            headers: {
                Authorization: `GenieKey ${this.options?.api_key}`
            },
            responseType: 'json'
        }).then((response) => response.data);

        return tryPromiseOpsgenieWithMessage(promise, 'Opsgenie failed');
    }

    public addNoteToAlert(identifier: Identifier, data: AlertNote): Promise<ResponseResult> {
        const url: string = `${config.OPSGENIE.URL}${Routes.OpsGenie.APIVersionV2}${Routes.OpsGenie.NoteToAlertPathPrefix}`;
        return axios.post(replace(url, Routes.PathsVariable.Identifier, identifier.identifier), data,{
            headers: {
                Authorization: `GenieKey ${this.options?.api_key}`
            },
            params: {
                identifierType: identifier.identifierType
            },
            responseType: 'json'
        }).then((response) => response.data);
    }


    public listAlert(params: ListAlertParams): Promise<ResponseResultWithData<Alert[]>> {
        const url: string = `${config.OPSGENIE.URL}${Routes.OpsGenie.APIVersionV2}${Routes.OpsGenie.AlertPathPrefix}`;
        return axios.get(url, {
            headers: {
                Authorization: `GenieKey ${this.options?.api_key}`
            },
            params,
            responseType: 'json'
        }).then((response) => response.data);
    }

    public getAlert(identifier: Identifier): Promise<ResponseResultWithData<Alert>> {
        return axios.get(`${config.OPSGENIE.URL}${Routes.OpsGenie.APIVersionV2}${Routes.OpsGenie.AlertPathPrefix}/${identifier.identifier}`, {
            headers: {
                Authorization: `GenieKey ${this.options?.api_key}`
            },
            params: {
                identifierType: identifier.identifierType
            },
            responseType: 'json'
        }).then((response) => response.data);
    }

    public closeAlert(identifier: Identifier): Promise<ResponseResult> {
        const path: string = `${replace(Routes.OpsGenie.CloseAlertPathPrefix, Routes.PathsVariable.Identifier, identifier.identifier)}`;
        const url: string = `${config.OPSGENIE.URL}${Routes.OpsGenie.APIVersionV2}${path}`;
        return axios.post(url, {}, {
            headers: {
                Authorization: `GenieKey ${this.options?.api_key}`
            },
            params: {
                identifierType: identifier.identifierType
            },
            responseType: 'json'
        }).then((response) => response.data);
    }

    public unacknowledgeAlert(identifier: Identifier, data?: AlertUnack): Promise<ResponseResult> {
        const path: string = `${replace(Routes.OpsGenie.UnacknowledgeAlertPathPrefix, Routes.PathsVariable.Identifier, identifier.identifier)}`;
        const url: string = `${config.OPSGENIE.URL}${Routes.OpsGenie.APIVersionV2}${path}`;
        return axios.post(url, data, {
            headers: {
                Authorization: `GenieKey ${this.options?.api_key}`
            },
            params: {
                identifierType: identifier.identifierType
            },
            responseType: 'json'
        }).then((response) => response.data);
    }

    public acknowledgeAlert(identifier: Identifier, data?: AlertAck): Promise<ResponseResult> {
        const path: string = `${replace(Routes.OpsGenie.AcknowledgeAlertPathPrefix, Routes.PathsVariable.Identifier, identifier.identifier)}`;
        const url: string = `${config.OPSGENIE.URL}${Routes.OpsGenie.APIVersionV2}${path}`;
        return axios.post(url, data, {
            headers: {
                Authorization: `GenieKey ${this.options?.api_key}`
            },
            params: {
                identifierType: identifier.identifierType
            },
            responseType: 'json'
        }).then((response) => response.data);
    }

    public snoozeAlert(identifier: Identifier, data: AlertSnooze): Promise<ResponseResult> {
        const path: string = `${replace(Routes.OpsGenie.SnoozeAlertPathPrefix, Routes.PathsVariable.Identifier, identifier.identifier)}`;
        const url: string = `${config.OPSGENIE.URL}${Routes.OpsGenie.APIVersionV2}${path}`;
        return axios.post(url, data, {
            headers: {
                Authorization: `GenieKey ${this.options?.api_key}`
            },
            params: {
                identifierType: identifier.identifierType
            },
            responseType: 'json'
        }).then((response) => response.data);
    }

    public assignAlert(identifier: Identifier, data: AlertAssign): Promise<ResponseResult> {
        const path: string = `${replace(Routes.OpsGenie.AssignAlertPathPrefix, Routes.PathsVariable.Identifier, identifier.identifier)}`;
        const url: string = `${config.OPSGENIE.URL}${Routes.OpsGenie.APIVersionV2}${path}`;
        return axios.post(url, data, {
            headers: {
                Authorization: `GenieKey ${this.options?.api_key}`
            },
            params: {
                identifierType: identifier.identifierType
            },
            responseType: 'json'
        }).then((response) => response.data);
    }

    public getUser(identifier: Identifier): Promise<ResponseResultWithData<OpsUser>> {
        const path: string = `${replace(Routes.OpsGenie.UserPathPrefix, Routes.PathsVariable.Identifier, identifier.identifier)}`;
        const url: string = `${config.OPSGENIE.URL}${Routes.OpsGenie.APIVersionV2}${path}`;
        return axios.get(url, {
            headers: {
                Authorization: `GenieKey ${this.options?.api_key}`
            },
            params: {
                identifierType: identifier.identifierType
            },
            responseType: 'json'
        }).then((response) => response.data);
    }

    public getTeam(identifier: Identifier): Promise<ResponseResultWithData<Team>> {
        return axios.get(`${config.OPSGENIE.URL}${Routes.OpsGenie.APIVersionV2}${Routes.OpsGenie.TeamPathPrefix}/${identifier.identifier}`, {
            headers: {
                Authorization: `GenieKey ${this.options?.api_key}`
            },
            params: {
                identifierType: identifier.identifierType
            },
            responseType: 'json'
        }).then((response) => response.data);
    }

    public getAllTeams(): Promise<ResponseResultWithData<Teams[]>> {
        const url: string = `${config.OPSGENIE.URL}${Routes.OpsGenie.APIVersionV2}${Routes.OpsGenie.TeamPathPrefix}`;
        return axios.get(url,{
            headers: {
                Authorization: `GenieKey ${this.options?.api_key}`
            },
            responseType: 'json'
        }).then((response) => response.data);
    }
}
