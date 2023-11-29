import {Product} from "../types/Product";

export namespace CollectionProducts {
    export type collectionType = 'products';
    export const collectionName = 'products';

    export function parseResponseObject(product: Product): Product {
        return {
            ...product
        }
    }
}