'use server'

export async function submitPost(content){
    console.log("submit post");
    try {
        const response = await fetch('https://post.nxtnet.in/api/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ content }),
        });
    
        if (response.ok) {
            console.log("submit post");
        } else {
            console.log("submit post");
        }
      } catch (error) {
        console.error('Failed to submit post:', error);
      }
}