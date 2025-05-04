import { getProduct } from 'apps/web-app/lib/db';
import { ProductDetail } from '../../../pages';
import _ from 'lodash';
import { cookies } from 'next/headers';
const page = async ({ params }: { params: { id: string } }) => {
  const product = (await getProduct({ id: params.id }).catch((err) => {
    console.log(err);
    return null;
  })) as modules.BProduct[] | null;
  const userId = cookies().get('temp_user_id')?.value;

  let colors: string[] = [];
  let images: string[] = [];
  let care: { description: string; icon: string }[] = [];
  product?.forEach((ar) => {
    if (colors.length > 0) {
      if (!colors.find((value) => value == ar.color_name)) {
        colors.push(ar.color_name);
      }
    } else {
      colors.push(ar.color_name);
    }
    if (images.length > 0) {
      if (!images.find((value) => value == ar.image)) {
        ar.image && images.push(ar.image);
      }
    } else {
      ar.image && images.push(ar.image);
    }
    if (ar.product_variant_id == product[0].product_variant_id) {
      if (!care.find((arr) => arr.description == ar.variation_name))
        ar.product_care_icon &&
          ar.variation_name &&
          care.push({
            description: ar.variation_name,
            icon: ar.product_care_icon,
          });
    }
  });

  if (product) {
    return (
      <ProductDetail
        userId={userId}
        product={product}
        colors={colors}
        images={images}
        care={care}
      />
    );
  }
  return <div>page</div>;
};
export default page;
