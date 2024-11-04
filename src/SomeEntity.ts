import {SomethingWasDone} from "./SomethingWasDone";
import {ProducesEvents} from "./ProducesEvents";

class SomeEntity implements ProducesEvents {
    eventBag: EventBag;

    constructor() {
        this.eventBag = new EventBag();
    }

    public doSomething() {
        this.eventBag.record(new SomethingWasDone('Something happened'));
    }

    public getEvents() {
        const recorded = this.eventBag.getEvents();
        this.eventBag = new EventBag()
        return recorded;
    }
}