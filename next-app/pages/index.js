import Link from 'next/link';
import Layout from '../components/Layout';

const Index = () => {
  return (
    <>
      <Layout title='Home'>
        <div>
          <h1>Hello World from Next JS</h1>
          <Link href='/about'>
            <a title='About this project'>About</a>
          </Link>
          <p>
            Enim esse esse labore sunt mollit elit excepteur. Cupidatat pariatur
            do dolore tempor. Commodo minim ullamco culpa dolor ad ipsum cillum
            consectetur amet non. Incididunt ipsum esse ad elit et laboris ea
            dolore incididunt nostrud culpa tempor pariatur est. Lorem velit
            nisi tempor anim nulla commodo incididunt esse duis irure anim esse
            officia consequat. Do eiusmod commodo veniam duis Lorem.
          </p>
        </div>
      </Layout>
    </>
  );
};

export default Index;
