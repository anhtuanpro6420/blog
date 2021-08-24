import Link from "next/link";

const DUMMY_POSTS = [
  {
    _id: '1',
    title: 'Post 1',
    content: '<div>Content 1</div>'
  },
  {
    _id: '2',
    title: 'Post 2',
    content: '<div>Content 2</div>'
  },
  {
    _id: '3',
    title: 'Post 3',
    content: '<div>Content 3</div>'
  },
  {
    _id: '4',
    title: 'Post 4',
    content: '<div>Content 4</div>'
  },
]

export default function Posts() {
  return (
    <div>
        Posts
        <ul>
            <li><Link href="/posts/test1">Test1</Link></li>
        </ul>
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
  return {
    props: {
      posts: DUMMY_POSTS
    },
    revalidate: 3600 // This function will run during build process, so data might be out of date. 
                    // Set it to ensure new content will update after x seconds of latest request then data will be updated
  }
}