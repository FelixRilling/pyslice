"use strict";

const slice = require("../index.js");

describe("Start+End", function () {

    it("Normal case 1", function () {
        expect(slice("Abracadabra", 0, 5)).toBe("Abrac");
    });

    it("Normal case 2", function () {
        expect(slice("Abracadabra", 2, 5)).toBe("rac");
    });

    it("Normal case 3", function () {
        expect(slice("Abracadabra", 0, 1)).toBe("A");
    });


    /*it("Negative index 1", function () {
        expect(slice("Abracadabra", -2, 5)).toBe("");
    });

    it("Negative index 2", function () {
        expect(slice("Abracadabra", 0, -7)).toBe("Abra");
    });

    it("Negative index 3", function () {
        expect(slice("Abracadabra", -4, -1)).toBe("abr");
    });

    it("Negative index 4", function () {
        expect(slice("Abracadabra", -6, -4)).toBe("ad");
    });

    it("Big Index 1", function () {
        expect(slice("Abracadabra", 0, 20)).toBe("Abracadabra");
    });

    it("Big Index 2", function () {
        expect(slice("Abracadabra", -10, 20)).toBe("Abracadabra");
    });*/


    it("Missing arg 1", function () {
        expect(slice("Abracadabra", false, 5)).toBe("Abrac");
    });

    it("Missing arg 2", function () {
        expect(slice("Abracadabra", 0, false)).toBe("Abracadabra");
    });
});

describe("Steps", function () {


});

describe("Arrays", function () {
    it("Normal case 1", function () {
        expect(slice(["foo", "bar", "fizz", "buzz"], 0, 4)).toEqual(["foo", "bar", "fizz", "buzz"]);
    });

    it("Normal case 2", function () {
        expect(slice(["foo", "bar", "fizz", "buzz"], 2, 4)).toEqual(["fizz", "buzz"]);
    });

    it("Normal case 3", function () {
        expect(slice(["foo", "bar", "fizz", "buzz"], 0, 1)).toEqual(["foo"]);
    });
});
