// src/routes/posts/[id]/+page.server.js

export const load = async ({ params, fetch }) => {
  const { id } = params;

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch article with ID ${id}`);
    }

    const data = await response.json();

    return {
      title: data.title,
      blogArticle: data.body,
      userId: data.userId,
    };
  } catch (error) {
    console.error('Error loading article:', error);
    return {
      title: 'Error',
      blogArticle: 'Could not load article. Please try again later.'
    };
  }
};
