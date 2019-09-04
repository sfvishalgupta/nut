'use strict';

const expect = require('chai').expect;
const UTILS = require("../index");

describe("Fake Test", () => {
    it("Should Return 4", () => {
        expect(UTILS.addNumber(2, 2)).equal(4);
    });
});
