import {DoSomethingEvent} from "./DoSomethingEvent";
import {ProducesEvents} from "./ProducesEvents";

class SomeEntity implements ProducesEvents {
    eventBag: EventBag;

    constructor() {
        this.eventBag = new EventBag();
    }

    public doSomething() {
        this.eventBag.record(new DoSomethingEvent('Something happened'));
    }

    public getEvents() {
        const recorded = this.eventBag.getEvents();
        this.eventBag = new EventBag()
        return recorded;
    }
}