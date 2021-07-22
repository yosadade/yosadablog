import { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import FeaturedPost from '@components/FeaturedPost';
import InfoPost from '@components/InfoPost';
import Container from '@components/Container';
import Layout from '@components/Layout';
import SectionHeader from '@components/SectionHeader';
import mockPosts from '../utils/diary.json';

export default function Home() {
  const [posts, setPosts] = useState(mockPosts);

  const featurePost = posts.length - 1
  const { thumbnail, category, date, title, shortDescription, authorAvatar, authorName } = posts[featurePost]
  const newPosts = posts.slice(0, featurePost)

  return (
    <Layout>
      <Head>
        <title>Diary &mdash; Yosadade</title>
      </Head>
      <Container>
        <SectionHeader>Diary</SectionHeader>
        <div className="mb-6"></div>
        <FeaturedPost
          thumbnail={thumbnail}
          category={category}
          date={date}
          title={title}
          shortDescription={shortDescription}
          authorAvatar={authorAvatar}
          authorName={authorName}
        />
        <div className="flex -mx-4 flex-wrap mt-6">
          {newPosts.map(post => {
            const { id, thumbnail, category, date, title, shortDescription, authorAvatar, authorName, authorJob } = post
            return (
              <div key={id} className="md:w-4/12 w-full px-4 py-6">
                <article>
                  <Link href={{pathname: '/detail'}} >
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
