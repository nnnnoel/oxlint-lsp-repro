export const test = <T extends boolean | null | undefined>(x: T) => (x ? 1 : 0);
