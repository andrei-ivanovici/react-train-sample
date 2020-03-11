import {useState, useEffect} from "react";

export function useDebounce(op: () => void, timeout: number, deps: any[]) {

    const [timer, setTimer] = useState();
    useEffect(() => {
        if (timer) {
            console.log("timer cleared ", timer);
            clearTimeout(timer);
        }
        console.log("scheduling new timer for ", timeout);
        setTimer(setTimeout(() => {
            console.log("debounce ended. Calling op");
            op();
        }, timeout));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);

}
