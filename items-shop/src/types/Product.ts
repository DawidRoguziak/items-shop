import dayjs from "dayjs";

type ProductCategory = {
  id: string;
  name: string;
}

type ProductAdditionalInfo = {
  [k in string]: unknown;
}

export type Product = {
  id: string;
  created: dayjs.Dayjs;
  updated: dayjs.Dayjs;
  name: string;
  image: string[];
  brand:  string;
  tags: string[];
  expand: {
    category: ProductCategory;
  }
  price: number;
  priceAfterDiscount: number;
  percentDiscountValue: number;
  quantity: number;
  discountStartDate: dayjs.Dayjs;
  discountEndDate: dayjs.Dayjs;
  avgRating: number;
  description: string;
  additionalInfo: ProductAdditionalInfo;
}