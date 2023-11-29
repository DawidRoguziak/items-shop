import * as dayjs from 'dayjs'

export namespace UtilsDate {
    export function parseToDateObject(date: string): dayjs.Dayjs {
        return dayjs(date);
    }
}