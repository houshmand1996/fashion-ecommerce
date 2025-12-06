declare namespace modules {
  interface IProduct {
    id: number | string;
    name: string;
    category: string;
    price: number | string;
    description: string;
    image: string;
    details: string;
    gender?: string;
    subCategory?: string;
  }
  interface IShoppingCart {
    id: number | string;
    cart_id: number | string;
    name: string;
    image: string;
    description: string;
    price: string;
    qty: number | string;
    color_hex: string;
    size_name: string;
    product_variant_id: string | number;
  }
  interface BProduct extends IProduct {
    stock: number;

    product_variant_id: number;
    color_name: string;
    color_hex: string;
    original_price?: string;
    size_name: string | null;
    product_materials: string | null;
    care_instruction: string | null;
    product_care_icon: string | null;
    variation_name: string | null;
  }
  interface shippingMethod {
    shippingName: string;
    cost: number | string;
  }
}
