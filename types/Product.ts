type ProductCategory = {
  id: string;
  name: string;
}

type ProductAdditionalInfo = {
  [k in string]: unknown;
}

export type Product = {
  id: string;
  created: Date;
  updated: Date;
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
  discountStartDate: Date;
  discountEndDate: Date;
  avgRating: number;
  description: string;
  additionalInfo: ProductAdditionalInfo;
}