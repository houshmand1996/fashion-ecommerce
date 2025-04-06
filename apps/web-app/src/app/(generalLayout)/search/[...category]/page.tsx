import { getProduct, menuServer } from 'apps/web-app/lib/db';
import { CatchAllCategory } from '../../../pages';

const page = async ({ params }: { params: { category: string[] } }) => {
  const knownCategories = [
    'New',
    'Apparel',
    'Bag',
    'Shoes',
    'Beauty',
    'Accessories',
  ];
  const knownTypes = [
    'outer',
    'dress',
    'blouse/shirt',
    't-shirt',
    'knitwear',
    'skirt',
    'pants',
    'denim',
    'kids',
  ];
  const knownGenders = ['women', 'men', 'kids'];
  const parsed = {
    gender: null as string | null,
    category: null as string | null,
    type: null as string | null,
  };

  for (const segment of params.category) {
    if (knownGenders.includes(segment)) parsed.gender = segment;
    else if (knownCategories.includes(segment)) parsed.category = segment;
    else if (knownTypes.includes(segment)) parsed.type = segment;
  }

  if (params.category[0]) {
    let item: modules.IProduct[] = [];
    try {
      item = (await getProduct({
        category: parsed.category || undefined,
        gender: parsed.gender || undefined,
        subCategory: parsed.type || undefined,
      })) as modules.IProduct[];
    } catch (error) {
      console.error('Error fetching product:', error);
    }
    return (
      <>
        {item && item.length > 0 ? (
          <CatchAllCategory params={params} item={item} />
        ) : (
          '404 nothing found'
        )}
      </>
    );
  }
  return <div>page{params.category}</div>;
};
export default page;
