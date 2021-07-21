import Link from 'next/link';
import InfoPost from './InfoPost';

export default function FeaturedPost({thumbnail, category, date, title, shortDescription, authorAvatar, authorName, authorJob}) {
  return (
    <article>
      <div className="flex -mx-4 lg:items-center items-start flex-wrap">
        <div className="px-4 lg:w-8/12 md:w-7/12 w-full">
          <Link href="/detail">
            <a>
              <img src={thumbnail} className="rounded-xl w-full mb-4 md:mb-0" />
            </a>
          </Link>
        </div>
        <div className="lg:w-4/12 md:w-5/12 w-full px-4">
          <InfoPost
            category={category}
            date={date}
            title={title}
            shortDescription={shortDescription}
            authorAvatar={authorAvatar}
            authorName={authorName}
            authorJob={authorJob}
          />
        </div>
      </div>
      <hr className="border-white/10 mt-10 md:hidden" />
    </article>
  );
}
