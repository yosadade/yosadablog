import { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import FeaturedPost from '@components/FeaturedPost';
import InfoPost from '@components/InfoPost';
import CardPost from '@components/CardPost';
import Container from '@components/Container';
import Layout from '@components/Layout';
import SectionHeader from '@components/SectionHeader';
import mockPosts from '../utils/diary.json';

export default function Home() {
  const [posts, setPosts] = useState(mockPosts);

  return (
    <Layout>
      <Head>
        <title>Diary &mdash; Yosadade</title>
      </Head>
      <Container>
        <SectionHeader>Catatan Harian</SectionHeader>
        <div className="mb-6"></div>
        <FeaturedPost
          thumbnail={"/featured-thumbnail.png"}
          category="Diary"
          date="July 14, 2021"
          title="Understanding color theory: the color wheel and finding complementary colors"
          shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
          shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
          authorAvatar={"/author-1.png"}
          authorName="Yosada Dede"
          authorJob="Front-end Engineer"
        />
        <div className="flex -mx-4 flex-wrap mt-6">
          {posts.map(post => {
            const { id, thumbnail, category, date, title, shortDescription, authorAvatar, authorName, authorJob } = post
            return (
              <div key={id} className="md:w-4/12 w-full px-4 py-6">
                <article>
                  <Link href={{pathname: '/detail', query: {name: 'test'}}} >
                    <a>
                      <img src={thumbnail} className="w-full rounded mb-4" />
                    </a>
                  </Link>
                  <InfoPost
                    category={category}
                    date={date}
                    title={title}
                    shortDescription={shortDescription}
                    authorAvatar={authorAvatar}
                    authorName={authorName}
                    authorJob={authorJob}
                  />
                </article>
              </div>
            )
          }
          )}
        </div>
      </Container>
    </Layout>
  )
}
