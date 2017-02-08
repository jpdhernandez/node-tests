const expect = require("expect");
const request = require("supertest");
const app = require("./server").app;

describe("Server", () => {
    it("should return chicken joy", (done) => {
        request(app)
            .get("/")
            .expect(404)
            .expect((res) => expect(res.body).toInclude({
                chicken: "joy"
            }))
            .end(done);
    });

    it("should return an object with user named Julian", (done) => {
        request(app)
            .get("/users")
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    name: "Julian",
                    age: 20
                });
            })
            .end(done);
    });
});