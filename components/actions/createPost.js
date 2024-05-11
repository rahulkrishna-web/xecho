export default async function createPost(content, sharing){
    let title = "default title"; // Assuming you have a title field in your form
    let author = "anon"; // Assuming you have an author field in your form
    let post_type = "echo"; 
    let requestBody = {
        "title": title,
        "content": content,
        "author": author,
        "post_type": post_type,
        "sharing": sharing
    };
    try {
        const response = await fetch('https://post.nxtnet.in/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });
    
        if (response.ok) {
            return await response.json()
        } else {
            return "Error: Could not create post.";
        }
      } catch (error) {
        console.error('Failed to submit post:', error);
      }
}