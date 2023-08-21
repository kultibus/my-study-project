export const fn =(length: number) => {
    return [...new Array(length)].map((_, i) => `Index ${i}`).filter(el => el !== 'Index 2').sort()
}