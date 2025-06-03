/** @type {import('./$types').PageLoad} */
export const load = async (event) => {
  const { articleId } = event.params;

  if (import.meta.env.DEV) {
    console.log("This is our load function");
  }

  const response = await event.fetch(
    `https://jsonplaceholder.typicode.com/posts/${articleId}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch article ${articleId}`);
  }

  const responseBody = await response.json();

  return {
    title: responseBody.title,
    blogArticle: responseBody.body,
    userId: responseBody.userId,
  };
};


