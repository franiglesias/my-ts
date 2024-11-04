import {ulid} from "ulid";

export class SomethingWasDone implements DomainEvent {
    data: any;
    eventName: string;
    id: string;
    timestamp: number;

    constructor(data: any) {
        this.eventName = 'SomethingWasDone';
        this.id = ulid();
        this.timestamp = Date.now();
        this.data = data;
    }
}