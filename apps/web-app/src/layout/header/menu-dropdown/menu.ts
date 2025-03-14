'use server';
export const menuServer = async () => {
  const menu = await fetch('http://localhost:8000/menu').catch((err) =>
    console.log(err)
  );
  if (menu) {
    const menuJson = (await menu.json()) as { [key: string]: string[] };
    return menuJson;
  }
  return null;
};
