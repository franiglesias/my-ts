import {SomethingWasDone} from "./SomethingWasDone";
import {ProducesEvents} from "./ProducesEvents";
import {EventBag} from "./EventBag";
import {DomainEvent} from "./DomainEvent";

export class SomeEntityWithExtraCare implements ProducesEvents {
    eventBag: EventBag;

    constructor() {
        this.eventBag = new EventBag();
    }

    public doSomething(): void {
        const event = new SomethingWasDone('Something happened');
        this.recordEvent(event);
    }

    public getEvents(): DomainEvent[] {
        return this.recordedEvents();
    }

    /*
    * Protect ourselves from the possibility of the eventBag being undefined or
    * event the concrete mechanism of recording events changing in the future.
    * */
    private recordedEvents(): DomainEvent[] {
        if (this.eventBag === undefined) {
            this.eventBag = new EventBag();
            return [];
        }
        const recorded = this.eventBag.getEvents();
        this.eventBag = new EventBag();
        return recorded;
    }

    /*
    * Protect ourselves from the possibility of the eventBag being undefined or
    * event the concrete mechanism of recording events changing in the future.
    * */
    private recordEvent(event: SomethingWasDone): void {
        if (this.eventBag === undefined) {
            this.eventBag = new EventBag();
        }
        this.eventBag.record(event);
    }
}