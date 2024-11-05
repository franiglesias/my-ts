export class Money {
    private amount: number;
    private currency: string;

    constructor(amount: number, currency: string) {
        this.amount = amount;
        this.currency = currency;
    }

    add(other: Money): Money {
        if (other.currency !== this.currency) {
            throw new Error('Currencies do not match');
        }
        return new Money(this.amount + other.amount, this.currency);
    }

    equals(other: Money): boolean {
        return this.amount === other.amount && this.currency === other.currency;
    }

    percent(pct: number): Money {
        return new Money(this.amount * pct / 100, this.currency);
    }

    subtract(discount: Money):Money {
        return new Money(this.amount - discount.amount, this.currency);
    }
}

