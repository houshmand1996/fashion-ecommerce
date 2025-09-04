'use server';
import mysql from 'mysql2';
export type Post = {
  id: string;
  title: string;
  author: string;
  publishTime: string;
  image: string;
  body: string;
  tag?: string;
};
const pool = mysql
  .createPool({
    host: process.env['mysql_host'],
    user: process.env['mysql_user'],
    password: process.env['mysql_password'],
    database: process.env['mysql_database'],
    // port: Number(process.env['mysql_port']),
  })
  .promise();
export const getProducts = async ({
  category,
  gender,
  subCategory,
  limit,
  id,
}: {
  category?: string | null;
  gender?: string | null;
  subCategory?: string | null;
  limit?: number;
  id?: string;
}) => {
  console.log('render getProducts');
  console.log(process.env['mysql_user']);

  const conditions: string[] = [];
  const params: (string | undefined)[] = [];

  if (gender) {
    conditions.push('(pg.gender_name = ? OR pc.product_gender_id IS NULL)');
    params.push(gender);
  }
  if (category) {
    conditions.push('pc2.category_name = ?');
    params.push(category);
  }
  if (subCategory) {
    conditions.push('pc.category_name = ?');
    params.push(subCategory);
  }
  if (id) {
    conditions.push('p.product_id!=?');
    params.push(id);
  }
  const whereClause =
    conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

  const sql = `select
  p.product_id as id,
  p.product_name as name,
  p.description,
  pg.gender_name,
  pc2.category_name as category,
  pc.category_name as subcategory,
  pi2.sales_price as price,
  pi3.image_path as image
from
  products p
JOIN product_item pi2 on
  pi2.product_id = p.product_id
left JOIN product_image pi3 on
  pi3.product_item_id = pi2.product_item_id
left join product_category pc on p.product_category_id = pc.product_category_id
LEFT join product_category pc2 on pc2.product_category_id = pc.parent_category_id
left join product_gender pg on pg.gender_id = pc.product_gender_id
${whereClause}
group by p.product_id
${limit ? `limit ${limit}` : ''}
;`;

  const result = await pool.execute(sql, params);

  return result[0];
};
export const getProduct = async ({ id }: { id: number | string }) => {
  console.log('render getProduct');

  const sql = `select
	pv.product_item_id as id,
	pv.product_variant_id ,
	p.product_name as name ,
	pg.gender_name ,
  p.product_materials ,
  p.care_instruction,
	pc2.category_name  as category,
	pc.category_name as subCategory,
	p.description,
	pi2.original_price ,
	pi2.sales_price as price,
	c.color_name,
  c.color_hex ,
  c.color_id,
	pi3.image_path as image,
	pv.qty_in_stock as stock,
	so.size_name,
	pcv.variation_name ,
	pc3.product_care_icon
	from
	products p
JOIN product_item pi2 on
	pi2.product_id = p.product_id
left JOIN color c on
	c.color_id = pi2.color_id
left JOIN product_image pi3 on
	pi3.product_item_id = pi2.product_item_id
	left join product_variation pv ON pv.product_item_id = pi2.product_item_id
left join product_category pc on  p.product_category_id= pc.product_category_id
LEFT join product_category pc2 on pc2.product_category_id =pc.parent_category_id
left join product_gender pg on gender_id = pc.product_gender_id left join size_option so on so.size_id =pv.size_id
	left join product_care_variation pcv on pcv.product_id = p.product_id
left join product_care pc3  on pc3.product_care_id = pcv.product_care_id
  ${id ? 'WHERE p.product_id=?' : ''}
  order by so.sort_order
  ;`;

  const result = await pool.execute(sql, [id]);
  return result[0];
};
export const getCart = async (id: string | undefined) => {
  let sql = '';
  if (!id) {
    return null;
  } else {
    sql = `select cart_id from shopping_cart where user_id=?`;
    const [firstRes] = (await pool.execute(sql, [id])) as [
      { cart_id: string | number }[] | null,
      any
    ];

    if (!(firstRes && firstRes?.length > 0)) {
      sql = `INSERT INTO shopping_cart (user_id) VALUES (?);`;
      const res = await pool.execute(sql, [id]);
      console.log('res insert into shopping_cart ', res);
      return null;
    } else {
      sql = `select
	sci.id,
	sci.cart_id,
  pv.product_variant_id,
	p.product_name as name,
	p.description,
	pi2.sales_price as price,
	sci.qty,pi3.image_path as image,
  c.color_hex,
  so.size_name
from
	shopping_cart_item sci
join product_variation pv on
	pv.product_variant_id = sci.product_variant_id
join product_item pi2 on
	pi2.product_item_id = pv.product_item_id
join products p on
	pi2.product_id = p.product_id
join product_image pi3 on pi3.product_item_id=pi2.product_item_id
join color c on c.color_id=pi2.color_id
join size_option so on so.size_id=pv.size_id
where sci.cart_id=?
group by pv.product_variant_id
order by
	sci.id ;`;
      const result = await pool.execute(sql, [firstRes[0].cart_id]);
      return result[0];
    }
  }
};
export const queryProduct = async ({ query }: { query: string }) => {
  console.log('render queryProduct');

  const sql = `select
    p.product_id as id,
    p.product_name as name,
    p.description,
    pg.gender_name,
    pc2.category_name as category,
    pc.category_name as subcategory,
    pi2.sales_price as price,
    pi3.image_path as image
  from
    products p
  JOIN product_item pi2 on
    pi2.product_id = p.product_id
  left JOIN product_image pi3 on
    pi3.product_item_id = pi2.product_item_id
  left join product_category pc on p.product_category_id = pc.product_category_id
  LEFT join product_category pc2 on pc2.product_category_id = pc.parent_category_id
  left join product_gender pg on pg.gender_id = pc.product_gender_id
  WHERE p.product_name LIKE ? or pg.gender_name LIKE ? or pc.category_name LIKE ?
  or pc2.category_name LIKE ?
  group by p.product_id;`;

  const result = await pool.execute(sql, [
    `%${query}%`,
    `%${query}%`,
    `%${query}%`,
    `%${query}%`,
  ]);
  return result[0];
};
export const postShoppingItem = async ({
  productVariant,
  user_id,
}: {
  productVariant: string | number;
  user_id: string | undefined;
}) => {
  console.log('render postShoppingItem');

  let sql = '';
  if (!user_id) {
    return null;
  }
  sql = `select cart_id from shopping_cart where user_id = ?`;
  const [firstRes] = (await pool.execute(sql, [user_id])) as [
    { cart_id: string }[],
    any
  ];
  if (firstRes[0].cart_id) {
    sql = `insert into shopping_cart_item(cart_id,product_variant_id,qty) values (?,?,?)`;
    const result = pool.execute(sql, [firstRes[0].cart_id, productVariant, 1]);
  }
};
export const updateCartItem = async ({
  qty,
  id,
}: {
  qty: number;
  id: number;
}) => {
  console.log('render updateCartItem');

  const sql = `UPDATE shopping_cart_item SET qty = ? WHERE id = ?`;
  const result = await pool.execute(sql, [qty, id]);
};

export const getPosts = async (id?: string | number) => {
  const sql = `select  post_id as id,
      post_title as title,
      post_author as author,
      post_tag as tag,
      post_image as image,
      post_body as body,
      post_publish_time as publishTime from posts ${
        id ? `where post_id=${id}` : ''
      }`;
  const [post] = id ? await pool.execute(sql, [id]) : await pool.execute(sql);
  return post;
};
export const getShipping = async () => {
  const sql = `select  shipping_method_name as shippingName ,cost from shipping_method`;
  const res = await pool.execute(sql);
  if (res[0]) return res[0];
  return null;
};
