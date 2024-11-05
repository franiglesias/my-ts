import {Money} from "./Money";

export class Price {
    private amount: Money;

    constructor(value: Money) {
        this.amount = value;
    }

    applyDiscount(percent: number): Price {
        const discount = this.amount.percent(percent);
        const discounted = this.amount.subtract(discount);
        return new Price(discounted);
    }

    equals(other: Price) {
        return this.amount.equals(other.amount);
    }
}