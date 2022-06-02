export enum AlertStatus {
    CLOSED = 'closed',
    OPEN = 'open'
}

export enum IdentifierType {
    ID = 'id',
    TINY = 'tiny',
    USERNAME = 'username',
    NAME = 'name'
}

export enum AlertResponderType {
    TEAM = 'team',
    USER = 'user',
    ESCALATION = 'escalation',
    SCHEDULE = 'schedule'
}

export enum IntegrationType {
    API = 'API',
    MATTERMOST = 'Mattermost',
    SLACKAPP = 'SlackApp',
    WEBHOOK = 'Webhook'
}

export type ActionType = 'rest' | 'aws-systems-manager' | 'aws-sns' | 'oec';

export type ResponseResult = {
    result: string;
    took: number;
    requestId: string;
}

export type ResponseResultWithData<T> = {
    took: number;
    requestId: string;
    data: T
}

export type OpsUser = {
    blocked: boolean;
    verified: boolean;
    id: string;
    username: string;
    fullName: string;
    role: {
        id: string;
        name: string;
    };
    timeZone: string;
    locale: string;
    userAddress: {
        country: string;
        state: string;
        city: string;
        line: string;
        zipCode: string;
    };
    createdAt: string;
}

export type Alert = {
    seen: boolean;
    id: string;
    tinyId: string;
    alias: string;
    message: string;
    status: string;
    acknowledged: boolean;
    isSeen: boolean;
    tags: any[];
    snoozed: boolean;
    count: number;
    lastOccurredAt: Date;
    createdAt: Date;
    updatedAt: Date;
    source: string;
    owner: string;
    priority: string;
    teams: any[];
    responders: any[];
    integration: any[];
    ownerTeamId: string;
}

export type ActionResponse = {
    id: string;
};

export type ActionCreate = {
    name: string;
    teamId: string;
    actionType: ActionType;
    awsSmActionChannel?: {
        roleName: string;
        accountId: string;
        region: string
    };
    awsSnsActionChannel?: {
        topicName: string;
        accountId: string;
        region: string;
    };
    restActionChannel?: {
        url: string;
        headers?: {
            [key: string]: string;
        }
    }
};

export type Integration = {
    id: string;
    name: string;
    enabled: boolean;
    type: string;
    teamId: string;
    version: string;
}

export type Account = {
    name: string;
    userCount: number;
    plan: {
        maxUserCount: number;
        name: string;
        isYearly: boolean;
    }
}

export type Teams = {
    id: string;
    name: string;
    description: string;
};

export type Team = {
    id: string;
    name: string;
    description: string;
    members: any[];
    links: any[];
}

export type AlertCreate = {
    message: string;
    priority?: string;
    responders?: {
        type?: string;
        id?: string;
        username?: string;
        name?: string;
    }[];
};

export type PriorityAlert = {
    priority: string;
    user?: string;
    source?: string;
    note?: string;
};

export type AlertAssign = {
    owner: {
        id?: string;
        username?: string;
    };
    user?: string;
    source?: string;
    note?: string;
}

export type AlertNote = {
    note: string;
    user?: string;
    source?: string;
};

export type AlertUnack = {
    note?: string;
    user?: string;
    source?: string;
};

export type AlertClose = {
    note?: string;
    user?: string;
    source?: string;
};

export type AlertAck = {
    note?: string;
    user?: string;
    source?: string;
};

export type AlertSnooze = {
    note?: string;
    user?: string
    source?: string;
    endTime: string;
};

export type Identifier = {
    identifier: string;
    identifierType: string;
};

export type AlertOrder = 'desc' | 'asc';

export type ListAlertParams = {
    query?: string;
    searchIdentifier?: string;
    searchIdentifierType?: string;
    offset?: number;
    limit?: number;
    sort?: string;
    order?: AlertOrder;
}

export type ListIntegrationsParams = {
    type?: string;
    teamId?: string;
    teamName?: string;
}

export type AlertWebhook = {
    alertId: string;
    message: string;
    tags: any[];
    tinyId: string;
    entity: string;
    alias: string;
    createdAt: Date;
    updatedAt: Date;
    username: string;
    description: string;
    team: string;
    responders: any[];
    teams: any[];
    actions: any[];
    details: any;
    priority: string;
    source: string;
}

export type NoteWebhook = {
    alertId: string;
    message: string;
    tags: any[];
    tinyId: string;
    entity: string;
    alias: string;
    createdAt: Date;
    updatedAt: Date;
    username: string;
    note: string;
    description: string;
    responders: any[];
    teams: any[];
    actions: any[];
    details: any;
    priority: string;
    oldPriority: string;
    source: string;
}

export type SnoozeWebhook = {
    alertId: string;
    message: string;
    tags: any[];
    tinyId: string;
    entity: string;
    alias: string;
    createdAt: Date;
    updatedAt: Date;
    username: string;
    userId: string;
    description: string;
    responders: any[];
    teams: any[];
    actions: any[];
    snoozeEndDate: string;
    snoozedUntil: string;
    details: any;
    priority: string;
    oldPriority: string;
    source: string;
}

export type AssignWebhook = {
    alertId: string;
    message: string;
    tags: any[];
    tinyId: string;
    entity: string;
    alias: string;
    createdAt: Date;
    updatedAt: Date;
    username: string;
    description: string;
    owner: string;
    responders: any[];
    teams: any[];
    actions: any[];
    details: any;
    priority: string;
    oldPriority: string;
    source: string;
}

export type WebhookRequest<T> = {
    action: string;
    alert: T;
    source: {
        name: string;
        type: string;
    };
    integrationName: string;
    integrationId: string;
    integrationType: string;
}
