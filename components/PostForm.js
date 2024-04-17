const PostForm = () => {
    async function submitPost(formData){
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

  return (
    <form action={submitPost} className="mb-4">
      <textarea
        name="content"
        className="w-full p-2 border rounded"
        placeholder="What's on your mind?"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Echo
      </button>
    </form>
  );
};

export default PostForm;
