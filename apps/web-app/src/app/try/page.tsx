import { getProduct, menuServer } from 'apps/web-app/lib/db';

const page = async () => {
  const data = await menuServer();
  console.log(data);

  return <div>page</div>;
};
export default page;
