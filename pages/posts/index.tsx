import axios from "axios";

export default function Posts({ posts = [], metadata }: { posts: Array<any>, metadata: any }) {
  const createMarkup = (content: string) => {
    return {__html: content};
  }
  return (
    <div>
        {posts.map(post => (
          <ul key={post._id}>
            <li>
              <div className="title">{post.title}</div>
              <div className="content" dangerouslySetInnerHTML={createMarkup(post.content)}></div>
            </li>
        </ul>
        ))}
        
    </div>
  )
}

// This function will run every request
// Using for data change everytime or need to access to req
// export async function getSeverSideProps(context: any) {
//   const { req, res } = context;
// return {
  // props: {
    // posts: DUMMY_POSTS
  // }
// }
// }

// This function will run during build process
// Using for data change not too much
export async function getStaticProps() {
  try {
    const { data: { data: posts, metadata } } = await axios.get('http://localhost:4000/api/v1/posts');
    return {
      props: {
        posts,
        metadata
      },
      revalidate: 1 // This function will run during build process, so data might be out of date. 
                      // Set it to ensure new content will update after x seconds of latest request then data will be updated
    }
  } catch (err) {
    console.log(err);
  }
}