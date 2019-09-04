'use strict';

const expect = require('chai').expect;
const UTILS = require("../src/index");

describe("Fake Test", () => {
    it("Should Return 4", () => {
        expect(UTILS.addNumber(2, 2)).equal(4);
    });

    it("Should Return true", () => {
        expect(UTILS.equal(2, 2)).equal(true);
    });
});
