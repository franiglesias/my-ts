import {SomethingWasDone} from "./SomethingWasDone";
import {ProducesEvents} from "./ProducesEvents";
import {EventBag} from "./EventBag";
import {DomainEvent} from "./DomainEvent";

export class SomeEntity implements ProducesEvents {
    eventBag: EventBag;

    constructor() {
        this.eventBag = new EventBag();
    }

    public doSomething() {
        this.eventBag.record(new SomethingWasDone('Something happened'));
    }

    public getEvents(): DomainEvent[] {
        const recorded = this.eventBag.getEvents();
        this.eventBag = new EventBag()
        return recorded;
    }
}