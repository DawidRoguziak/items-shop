import currency from 'currency.js'


export namespace UtilsCurrency {
    export function parseCentsToPrice(cents: string | number): string {
        return currency(cents, {fromCents: true, precision: 2, symbol: '€'}).format().toString();
    }
}