export async function fetchTabContent(index) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${index + 1}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return {
      userId: data.userId,
      body: data.body,
    };
  } catch (error) {
    console.error(`Error fetching tab content: ${error}`);
    throw error;
  }
}
