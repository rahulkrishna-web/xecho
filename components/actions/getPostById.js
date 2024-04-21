export default async function getPostById(id) {
    try {
      const response = await fetch(`https://post.nxtnet.in/?q=post&id=${id}`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to fetch post data');
      }
    } catch (error) {
      console.error('Error fetching post data:', error);
      throw error;
    }
  }
  