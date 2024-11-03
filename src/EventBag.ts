class EventBag {
    private events: DomainEvent[] = [];

    record(event: DomainEvent) {
        this.events.push(event);
    }

    getEvents(): DomainEvent[] {
        return this.events;
    }
}