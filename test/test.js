var calculator = require('../simple-calculator');


describe("simple calculator to add numbers", function () {
    it("should add two numbers", function () {
        expect(calculator.add(0,0)).toEqual(0);
    });

    it("should add bunch of numbers", function () {
        expect(calculator.add(1,2,3,4)).toEqual(10);
    });
});


describe("simple calculator to multiply numbers", function () {
    it("should multiply two numbers", function () {
        expect(calculator.multiply(0,0)).toEqual(0);
    });

    it("should multiply bunch of numbers", function () {
        expect(calculator.multiply(1,2,3,4)).toEqual(24);
    });
});