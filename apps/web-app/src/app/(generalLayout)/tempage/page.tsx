import { getProduct, getCart, postProduct } from 'apps/web-app/lib/db';

const page = async () => {
  // const data = await getProduct(1);
  // const cart = await getCart(1);
  const product = await postProduct({
    item: {
      category: '',
      description: '',
      details: '',
      name: 'newproduct',
      image: '',
      price: 250,
      productId: 153,
      stock: 12,
    },
  });
  console.log(product, 'product');

  return <div>page</div>;
};
export default page;
