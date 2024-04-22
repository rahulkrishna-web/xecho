const getPosts = async () => {
    const response = await fetch('https://post.nxtnet.in');
    const data = await response.json();
    return data;
  };

export default getPosts