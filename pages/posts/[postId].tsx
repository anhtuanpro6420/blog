import axios from "axios";
import Head from "next/head";

export default function Posts({ post }: any) {
    const createMarkup = (content: string) => {
      return {__html: content};
    }
    return (
      <div>
          Post postId detail
          <Head>
        <title>{post.title || 'Detail page'}</title>
        <meta name="description" content="All technical posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div dangerouslySetInnerHTML={createMarkup(post.content)}></div>
      </div>
    )
  }

  export async function getStaticPaths() {
    const { data: { data: posts, metadata } } = await axios.get('http://localhost:4000/api/v1/posts');
    return {
      fallback: 'blocking',
      paths: posts.map((post: any ) => ({
        params: {postId: post._id}
      }))
    }
  }

  export async function getStaticProps(context: any) {
    const postId = context.params.postId;
    const { data: post } = await axios.get(`http://localhost:4000/api/v1/posts/${postId}`);
    return {
      props: {
        post,
      }
    }
  }