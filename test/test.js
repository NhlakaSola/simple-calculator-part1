var calculator = require('../simple-calculator');

describe("simple calculator to add two numbers", function () {
    it("should add two numbers", function () {
        expect(calculator.add(0,0)).toEqual(0);
    });
});

describe("simple calculator to add two numbers", function () {
    it("should add two numbers", function () {
        expect(calculator.add(-1,-1)).toEqual(-2);
    });
});


describe("simple calculator to add two numbers", function () {
    it("should add two numbers", function () {
        expect(calculator.add(4,5)).toEqual(9);
    });
});

describe("simple calculator to add bunch of numbers", function () {
    it("should add bunch of numbers", function () {
        expect(calculator.add(1,2,3,4)).toEqual(10);
    });
});


describe("simple calculator to multiply two numbers", function () {
    it("should multiply two numbers", function () {
        expect(calculator.multiply(1,2)).toEqual(2);
    });
});

describe("simple calculator to multiply bunch of numbers", function () {
    it("should multiply bunch of numbers", function () {
        expect(calculator.multiply(1,2,3,4)).toEqual(24);
    });
});