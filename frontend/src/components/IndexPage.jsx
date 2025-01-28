import Post from '../Post'
import { useEffect ,  useState } from 'react'



 function IndexPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/post').then(Response => {
      Response.json().then(posts => {
        setPosts(posts);
      })
    })
  }, []);
  return (
    <>
     {posts.length > 0 && posts.map(post => (
      <Post {...post} />
     ))}
    </>
  )
}

export default IndexPage
