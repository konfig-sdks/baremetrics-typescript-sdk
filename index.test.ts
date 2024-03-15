import { Baremetrics } from "./index";

describe("baremetrics-typescript-sdk", () => {
    it("initialize client", async () => {
        const baremetrics = new Baremetrics({
            apiKey: "API_KEY",
        });
    });
});
