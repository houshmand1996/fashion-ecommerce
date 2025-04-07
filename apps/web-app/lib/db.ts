'use server';
const fetchProduct = async (server: string) => {
  try {
    const product = await fetch(server);
    const productJson = await product.json();

    if (Object.keys(productJson).length === 0) {
      return null;
    }

    return Array.isArray(productJson) ? productJson : [productJson];
  } catch (err) {
    console.log(err);
    return null;
  }
};
export const getProduct = async ({
  id,
  category,
  gender,
  subCategory,
}: {
  id?: number | string;
  category?: string;
  gender?: string;
  subCategory?: string;
}) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_SERVER}/products`;
  const queryParams = new URLSearchParams();

  if (id) {
    // If `id` is provided, fetch the specific product
    const server = `${baseUrl}/${id}`;
    return fetchProduct(server);
  }

  // Add query parameters based on the provided filters
  if (category) queryParams.append('category', category);
  if (gender) queryParams.append('gender', gender);
  if (subCategory) queryParams.append('subCategory', subCategory);

  const server = queryParams.toString() ? `${baseUrl}?${queryParams}` : baseUrl;

  return fetchProduct(server);
};
export const getCart = async (id: number | string) => {
  const cart = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/shoppingCart/${id}`
  ).catch((err) => {
    console.log(err);

    return null;
  });

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
  const product = await fetch(`${process.env.NEXT_PUBLIC_SERVER} /products`, {
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
  const product = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/products/${id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(item),
    }
  ).catch((err) => {
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
  const shoppingCart = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/shoppingCart/${id}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ products: [item] }),
      headers: {
        'Content-type': 'application/json ; charset=UTF-8',
      },
    }
  ).catch((err) => {
    console.log(err);

    return null;
  });

  if (shoppingCart) {
    const shoppingCartJson = await shoppingCart.json().catch((err) => {
      console.log(err);
      return null;
    });

    if (shoppingCartJson && shoppingCartJson[0]) {
      return shoppingCartJson[0] as modules.IShoppingCart;
    }
  }
  return null;
};
export const menuServer = async () => {
  const menu = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/menu`).catch(
    (err) => console.log(err)
  );

  if (menu) {
    const menuJson = await menu.json().catch((err) => {
      console.log(err);
      return null;
    });
    return menuJson;
  }
  return null;
};
