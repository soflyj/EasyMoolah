import { Time } from '@angular/common';

export class Result {
    public resultCode: number;
    public result: string;
    public input: string;
    public output: string;
    public error: string;
    public errorFriendly: string;
    public startDateTime: Time;
    public endDateTime: Time;

    constructor(resultCode: number, result: string, input: string, output: string, error: string, errorFriendly: string, startDateTime: Time, endDateTime: Time) {
        this.resultCode = resultCode;
        this.result = result;
        this.input = input;
        this.output = output;
        this.error = error;
        this.errorFriendly = errorFriendly;
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
    }
}
