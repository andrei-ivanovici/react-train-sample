import {renderHook} from '@testing-library/react-hooks';
import {useDebounce} from "./useDebounce";
import {waitFor} from "../test-utils/hook.test-utils";

describe("debounce  hook should", () => {

    it("should execute operation after the timeout", async () => {
        const callback = jest.fn();
        renderHook(() => useDebounce(callback, 1, []));
        await waitFor(2);
        expect(callback).toHaveBeenCalled();
    });

    it("should execute operation only once", async () => {
        const callback = jest.fn();
        const {rerender} = renderHook((p: any) => useDebounce(callback, 5, [p.user]), {initialProps: {user: 1}});
        rerender({user: 2});
        rerender({user: 3});
        await waitFor(6);
        expect(callback).toHaveBeenCalledTimes(1);
    });
});
