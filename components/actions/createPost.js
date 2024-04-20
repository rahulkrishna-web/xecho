export default async function createPost(formData){
    console.log("submit post:",);
    let title = "default title"; // Assuming you have a title field in your form
    let content = formData.get('content');
    let author = "anon"; // Assuming you have an author field in your form
    let post_type = "echo"; 
    let requestBody = {
        "title": title,
        "content": content,
        "author": author,
        "post_type": post_type
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
            var resbody = await response.json()
            console.log("submit post", resbody );
        } else {
            console.log("could not submit post");
        }
      } catch (error) {
        console.error('Failed to submit post:', error);
      }
}