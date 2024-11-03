export interface ProducesEvents {
    getEvents(): Array<DomainEvent>;
}