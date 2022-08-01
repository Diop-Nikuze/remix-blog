type Posts = {
  slug: string;
  title: string;
};

export async function getPosts(): Promise<Posts[]> {
  const posts = [
    {
      slug: "first-post",
      title: "My First Post",
    },
    {
      slug: "trail-riding-with-onewheel",
      title: "Trail Riding with Onewheel",
    },
  ];

  return posts;
}
