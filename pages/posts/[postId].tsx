import { useRouter } from 'next/router';

export default function Posts() {
    const router = useRouter();
    const postId = router.query.postId;
    console.log(postId)
    return (
      <div>
          Post postId detail
      </div>
    )
  }

  export async function getStaticPaths() {
    return {
      fallback: false,
      paths: [
        {
          params: {
            postId: '1'
          }
        }
      ],
    }
  }

  export async function getStaticProps(context: any) {
    const postId = context.params.postId;
    console.log(`postId getStatic Props`, postId)
    return {
      props: {
        posts: {
          _id: '1',
          title: 'Post 1',
          content: '<div>Content 1</div>'
        },
      },
    }
  }