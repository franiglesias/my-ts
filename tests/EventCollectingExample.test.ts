import {test} from "node:test";
import {SomeEntity} from "../src/event-collecting-example/SomeEntity";
import {SomethingWasDone} from "../src/event-collecting-example/SomethingWasDone";
import assert from "node:assert";
import {DomainEvent} from "../src/event-collecting-example/DomainEvent";


test('Event collecting works', (): void => {
    const entity = new SomeEntity();
    entity.doSomething();
    const events: DomainEvent[] = entity.getEvents();

    assert(events.length === 1);
    assert(events[0] instanceof SomethingWasDone);
    assert(events[0].data === 'Something happened');
});

