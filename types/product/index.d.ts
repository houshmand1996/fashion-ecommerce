declare namespace modules {
  interface IProduct {
    id: number | string;
    name: string;
    category: string;
    price: number | string;
    stock: number | string;
    description: string;
    image: string;
    details: string;
    gender?: string;
    subCategory?: string;
  }
  interface IShoppingCart {
    id: number | string;
    userId: number | string;
    products: {
      productId: number | string;
      quantity: number | string;
    }[];
  }
}
