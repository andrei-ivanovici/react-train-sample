import {debounce} from "./debounce";
import {waitFor} from "../test-utils/hook.test-utils";

describe("debounce function", () => {
    it("should  execute callback after timeout", async () => {
        const fn = jest.fn();
        debounce(fn, 1);
        await waitFor(2);
        expect(fn).toHaveBeenCalledTimes(1);
    });

    it("should  execute callback just once", async () => {
        const fn = jest.fn();
        debounce(fn, 1);
        debounce(fn, 1);
        debounce(fn, 1);
        debounce(fn, 1);

        await waitFor(2);
        expect(fn).toHaveBeenCalledTimes(1);
    });
});
