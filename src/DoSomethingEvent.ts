import {ulid} from "ulid";

export class DoSomethingEvent implements DomainEvent {
    data: any;
    eventName: string;
    id: string;
    timestamp: number;

    constructor(data: any) {
        this.eventName = 'DoSomethingEvent';
        this.id = ulid();
        this.timestamp = Date.now();
        this.data = data;
    }
}