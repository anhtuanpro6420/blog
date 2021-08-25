import axios from "axios";
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const IconText = ({ icon, text }: { icon: any, text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default function Posts({ posts = [], metadata }: { posts: Array<any>, metadata: any }) {
  const router = useRouter()
  const handleItemClicked = (item: any) => {
    router.push(`/posts/${item._id}`)
  }
  return (
    <>
    <Head>
        <title>Posts Si blog</title>
        <meta name="description" content="All technical posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 10,
    }}
    dataSource={posts}
    renderItem={item => (
      <List.Item
        key={item._id}
        actions={[
          <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
        onClick={() => handleItemClicked(item)}
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={""}>{item.title}</a>}
          description={item.content}
        />
        {item.content}
      </List.Item>
    )}
  />
  </>
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