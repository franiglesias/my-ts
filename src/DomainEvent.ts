interface DomainEvent {
    eventName: string;
    data: any;
    timestamp: number;
    id: string;
}