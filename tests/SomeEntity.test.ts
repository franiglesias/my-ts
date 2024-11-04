import {test} from "node:test";
import {SomeEntity} from "../src/SomeEntity";
import {SomethingWasDone} from "../src/SomethingWasDone";
import assert from "node:assert";
import {DomainEvent} from "../src/DomainEvent";


test('Event collecting works', (): void => {
    const entity = new SomeEntity();
    entity.doSomething();
    const events: DomainEvent[] = entity.getEvents();

    assert(events.length === 1);
    assert(events[0] instanceof SomethingWasDone);
    assert(events[0].data === 'Something happened');
});

