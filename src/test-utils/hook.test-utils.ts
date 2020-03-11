export function waitFor(timeout: number) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}
