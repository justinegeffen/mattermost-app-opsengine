import {AppSelectOption, AttachmentOption} from '../types';

export const option_time_5m = '5m';
export const option_time_10m = '10m';
export const option_time_15m = '15m';
export const option_time_30m = '30m';
export const option_time_1h = '1h';
export const option_time_2h = '2h';
export const option_time_6h = '6h';
export const option_time_1d = '1d';

export const options_times: AttachmentOption[] = [
    {
        text: '5 min.',
        value: option_time_5m
    },
    {
        text: '10 min.',
        value: option_time_10m
    },
    {
        text: '15 min.',
        value: option_time_15m
    },
    {
        text: '30 min.',
        value: option_time_30m
    },
    {
        text: '1 hour.',
        value: option_time_1h
    },
    {
        text: '2 hours.',
        value: option_time_2h
    },
    {
        text: '6 hours.',
        value: option_time_6h
    },
    {
        text: '1 day.',
        value: option_time_1d
    }
];

export const option_alert_assign = 'assign';
export const option_alert_snooze = 'snooze';
export const option_alert_add_note = 'add_note';
export const option_alert_take_ownership = 'take_ownership';

export const options_alert: AttachmentOption[] = [
    {
        text: 'Assign',
        value: option_alert_assign
    },
    {
        text: 'Snooze',
        value: option_alert_snooze
    },
    {
        text: 'Add note',
        value: option_alert_add_note
    },
    {
        text: 'Take Ownership',
        value: option_alert_take_ownership
    }
];

export const option_alert_priority_p1 = 'P1';
export const option_alert_priority_p2 = 'P2';
export const option_alert_priority_p3 = 'P3';
export const option_alert_priority_p4 = 'P4';
export const option_alert_priority_p5 = 'P5';

export const options_alert_priority: AppSelectOption[] = [
    {
        label: 'P1-Critical',
        value: option_alert_priority_p1
    },
    {
        label: 'P2-High',
        value: option_alert_priority_p2
    },
    {
        label: 'P3-Moderate',
        value: option_alert_priority_p3
    },
    {
        label: 'P4-Low',
        value: option_alert_priority_p4
    },
    {
        label: 'P5-Informational',
        value: option_alert_priority_p5
    }
];
