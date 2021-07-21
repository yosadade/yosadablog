import { useState } from 'react';
import Head from 'next/head'
import FeaturedPost from '@components/FeaturedPost';
import CardPost from '@components/CardPost';
import Container from '@components/Container';
import SectionHeader from '@components/SectionHeader';
import Layout from '@components/Layout';
import mockPosts from '../utils/inspiration.json';

export default function Home() {
  const [posts, setPosts] = useState(mockPosts);

  return (
    <Layout>
      <Head>
        <title>Inspirations &mdash; Yosadade</title>
      </Head>
      <Container>
      <SectionHeader>Inspiration</SectionHeader>
        <div className="mb-6"></div>
        <FeaturedPost 
        thumbnail={"/featured-thumbnail.png"}
        category="Inspiration"
        date="July 14, 2021"
        title="Understanding color theory: the color wheel and finding complementary colors"
        shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
        shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
        authorAvatar={"/author-1.png"}
        authorName={"/author-1.png"}
        authorJob="Front-end Engineer"
        />
        <div className="flex -mx-4 flex-wrap mt-6">
          {posts.map(post => (
            <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  )
}
