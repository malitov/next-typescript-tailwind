import { NextPage } from 'next';
import Layout from '../components/Layout';

const IndexPage: NextPage = () => (
  <Layout title="Home | Next.js Starter">
    <h1 className="title text-center py-12">Next.js Starter 👋</h1>
    <div className="text-center">
      <p>Next.js - TypeScript - Tailwind</p>
    </div>
  </Layout>
);

export default IndexPage;
