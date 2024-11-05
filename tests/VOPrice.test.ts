import {test} from "node:test";
import {Price} from "../src/value-objects/Price";
import assert from "node:assert";
import {Money} from "../src/value-objects/Money";

test("Price discount",  (t) => {
    const eur100 = new Money(100, "EUR");
    const eur80 = new Money(80, "EUR");

    const price = new Price(eur100);
    const discountedPrice = price.applyDiscount(20);
    assert(discountedPrice.equals(new Price(eur80)));
});
