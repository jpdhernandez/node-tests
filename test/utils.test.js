const expect = require("expect");
const utils = require("./utils");

it("should add two numbers", () => {
    const res = utils.add(33, 11);

    expect(res).toBe(44).toBeA("number");
});

it("should asyncAdd two numbers", (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA("number");
        done();
    });
});

it("should square a number", () => {
    const res = utils.square(3);

    expect(res).toBe(9).toBeA("number");
});

it("should asyncSquare a number", (done) => {
    const res = utils.asyncSquare(5, (product) => {
        expect(product).toBe(25).toBeA("number");
        done();
    });
});

it("should set firstName and lastName", () => {
    const user = { location: "Toronto", age: 60 };
    const res = utils.setName(user, "JP Hernandez");

    expect(res).toInclude({
        firstName: "JP",
        lastName: "Hernandez"
    });
});