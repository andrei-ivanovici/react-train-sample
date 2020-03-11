let lastTimer: any;

export function debounce(op: () => void, timeout: number) {
    if (lastTimer) {
        clearTimeout(lastTimer);
    }
    lastTimer = setTimeout(op, timeout);
}
