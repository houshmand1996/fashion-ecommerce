'use server';
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
      return productJson[0] as modules.IProduct;
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

      return cartJson[0] as modules.IShoppingCart;
    }
  }
  return null;
};
export const postProduct = async ({
  item,
}: {
  item: Omit<modules.IProduct, 'id'>;
}) => {
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

    if (productJson && productJson[0]) {
      return productJson[0] as modules.IProduct;
    }
  }
  return null;
};
export const patchProduct = async ({
  item,
  id,
}: {
  item: Partial<modules.IProduct>;
  id: string | number;
}) => {
  const product = await fetch(`${process.env.server}/products/${id}`, {
    method: 'PATCH',
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

    if (productJson && productJson[0]) {
      return productJson[0] as modules.IProduct;
    }
  }
  return null;
};
export const patchCartShopping = async ({
  item,
  id,
}: {
  item: { productId: number | string; quantity: number | string };
  id: string | number;
}) => {
  console.log(item, 'item');

  const shoppingCart = await fetch(`${process.env.server}/shoppingCart/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ products: [item] }),
    headers: {
      'Content-type': 'application/json ; charset=UTF-8',
    },
  }).catch((err) => {
    console.log(err);

    return null;
  });

  if (shoppingCart) {
    const shoppingCartJson = await shoppingCart.json().catch((err) => {
      console.log(err);
      return null;
    });
    console.log(shoppingCartJson);

    if (shoppingCartJson && shoppingCartJson[0]) {
      return shoppingCartJson[0] as modules.IShoppingCart;
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
