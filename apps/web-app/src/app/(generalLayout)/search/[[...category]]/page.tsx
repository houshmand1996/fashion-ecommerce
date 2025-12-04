import { getProduct, getProducts, queryProduct } from 'apps/web-app/lib/db';
import { CatchAllCategory } from '../../../pages';

const page = async ({
  params,
  searchParams,
}: {
  params: { category?: string[] };
  searchParams: { query: string | undefined };
}) => {
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

  let item: modules.IProduct[] | null = null;
  const query = searchParams;
  const knownGenders = ['women', 'mans', 'kids'];

  if (params && params.category) {
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
      try {
        item = (await getProducts({
          category: parsed.category || undefined,
          gender: parsed.gender || undefined,
          subCategory: parsed.type || undefined,
        })) as modules.IProduct[];
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }
  }
  if (query.query) {
    item = (await queryProduct({ query: query.query })) as
      | modules.IProduct[]
      | null;
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
};
export default page;
