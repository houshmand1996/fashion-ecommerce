export type Post = {
  id: string;
  title: string;
  author: string;
  publishTime: string;
  image: string;
  body: string;
  tag?: string[];
};
export const getPosts = async () => {
  const data = await fetch('http://localhost:8000/posts');

  const post: Post[] = await data.json();
  return post;
};
export const getPost = async ({ id }: { id: string }) => {
  const data = await fetch('http://localhost:8000/posts/' + id);

  const post: Post = await data.json();
  return post;
};
