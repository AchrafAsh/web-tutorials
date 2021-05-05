import Layout from '../components/Layout';
import fetch from 'node-fetch';

// this is an example of Static Generation Page
const Blog = ({ posts }) => {
  return (
    <Layout title='Blog'>
      <h1>Blog</h1>
      <div>
        {posts &&
          posts.map(post => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <small>{post.timestamp}</small>
              <p>{post.content}</p>
            </div>
          ))}
      </div>
    </Layout>
  );
};

// // this function gets called at build time
// export async function getStaticProps() {
//   // call an external API endpoint to get posts
//   const res = await fetch('https://astudentexperiment.blogger.com/posts');
//   const posts = await res.json();

//   // By returning { props: posts } the Blog component
//   // will receive posts as a prop at build time
//   return {
//     props: {
//       posts
//     }
//   };
// }

export default Blog;
