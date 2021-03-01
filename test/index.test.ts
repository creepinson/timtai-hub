import { expect } from "chai";

describe("main()", () => {
    it("Should contain hello", () => {
        expect("hello").to.contain("hello");
    });
});
