import type {ApiProduct, Product} from "~/types/Product";
import {UtilsDate} from "~/utils/date";

export namespace CollectionProducts {
    export type collectionType = 'products';
    export const collectionName = 'products';

    export function parseResponseObject(product: ApiProduct): Product {
        return {
            ...product,
            created: UtilsDate.parseToDateObject(product.created),
            updated: UtilsDate.parseToDateObject(product.updated),
            discountEndDate: UtilsDate.parseToDateObject(product.discountEndDate),
            discountStartDate: UtilsDate.parseToDateObject(product.discountStartDate),
        }
    }
}