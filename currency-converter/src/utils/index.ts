export function parseAmount(x: string) {
    return Number(x.replace(/,/g, ''))
  }