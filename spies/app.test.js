const expect = require("expect");
const rewire = require("rewire");
const db = {
    saveUser: expect.createSpy()
};
const app = rewire("./app")(db);

describe("App", () => {

    it("should call the spy correctly", () => {
        const spy = expect.createSpy();
        spy();
        expect(spy).toHaveBeenCalled();
    });

    it("should call the spy with user", () => {
        const spy = expect.createSpy();
        spy("test@test", 25);
        expect(spy).toHaveBeenCalledWith("test@test", 25);
    });

    it("should call saveUser with user object", () => {
        const email = "t@test.com";
        const password = "1234";

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({ email, password });
    });
});