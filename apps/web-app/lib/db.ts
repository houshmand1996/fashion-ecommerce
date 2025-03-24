'use server';
export type Product = {
  productId: number | string;
  name: string;
  category: string;
  price: number | string;
  stock: number | string;
  description: string;
  image: string;
  details: string;
};
export type Cart = {
  cartId: number | string;
  userId: number | string;
  products: { productId: number | string; quantity: number | string }[];
};
export const getProduct = async (id: number | string) => {
  const product = await fetch(`${process.env.server}/products/${id}`).catch(
    (err) => {
      console.log(err);

      return null;
    }
  );

  if (product) {
    const productJson = await product.json().catch((err) => {
      console.log(err);
      return null;
    });

    if (productJson) {
      if (Object.keys(productJson).length === 0) {
        return null;
      }
      return productJson[0] as Product;
    }
  }
  return null;
};
export const getCart = async (id: number | string) => {
  const cart = await fetch(`${process.env.server}/shoppingCart/${id}`).catch(
    (err) => {
      console.log(err);

      return null;
    }
  );

  if (cart) {
    const cartJson = await cart.json().catch((err) => {
      console.log(err);
      return null;
    });
    if (cartJson) {
      if (Object.keys(cartJson).length === 0) {
        return null;
      }

      return cartJson[0] as Cart;
    }
  }
  return null;
};
export const postProduct = async ({ item }: { item: Product }) => {
  const product = await fetch(`${process.env.server}/products`, {
    method: 'POST',
    body: JSON.stringify(item),
  }).catch((err) => {
    console.log(err);

    return null;
  });

  if (product) {
    const productJson = await product.json().catch((err) => {
      console.log(err);
      return null;
    });
    console.log(productJson, 'product');

    if (productJson && productJson[0]) {
      return productJson[0] as Product;
    }
  }
  return null;
};
export const menuServer = async () => {
  const menu = await fetch(`${process.env.server}/menu`).catch((err) =>
    console.log(err)
  );

  if (menu) {
    const menuJson = await menu.json().catch((err) => {
      console.log(err);
      return null;
    });
    if (menuJson) {
      const data = Object.values(menuJson)[0] as { [key: string]: string[] };
      return data;
    }
  }
  return null;
};
