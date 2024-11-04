import {DomainEvent} from "./DomainEvent";

export interface ProducesEvents {
    getEvents(): Array<DomainEvent>;
}