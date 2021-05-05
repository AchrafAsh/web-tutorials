import Link from 'next/link';
import fetch from 'node-fetch';

import Layout from '../components/Layout';

// This is an example of Server Side Rendering Page
const About = ({ data }) => (
  <Layout title='About Us'>
    <div>
      <h1>About This Project</h1>
      <Link href='/'>
        <a title='back to home page'>Back to home page</a>
      </Link>
    </div>
  </Layout>
);

// // this gets called on every request, and not only on build-time
// export async function getServerSideProps() {
//   // fetch data from external API
//   const res = await fetch('https://.../data');
//   const data = await res.json();

//   // pass data to the page via props
//   return { props: { data } };
// }

export default About;
