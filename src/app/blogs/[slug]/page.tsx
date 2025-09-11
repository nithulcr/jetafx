
"use client";
import { blogPosts } from '../data';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedButton from "@/components/AnimatedButton";
import Link from 'next/link';
import React, { useState, use } from 'react';


export default function BlogPostPage({ params: initialParams }: { params: Promise<{ slug: string }> }) {
  const params = use(initialParams);

  const relatedBlogPosts = blogPosts.filter((p) => p.slug !== params.slug);

  // Shuffle related posts to get a random selection
  for (let i = relatedBlogPosts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [relatedBlogPosts[i], relatedBlogPosts[j]] = [relatedBlogPosts[j], relatedBlogPosts[i]];
  }

  const [visibleRelatedBlogsCount, setVisibleRelatedBlogsCount] = useState(3);

  const handleLoadMoreRelated = () => {
    setVisibleRelatedBlogsCount(prevCount => prevCount + 3);
  };

  const blogsToDisplay = relatedBlogPosts.slice(0, visibleRelatedBlogsCount);
  const hasMoreRelatedBlogs = visibleRelatedBlogsCount < relatedBlogPosts.length;

  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Header />

      <section className="other-section pt-14 lg:pt-22 pb-5 lg:pb-10 overflow-hidden relative">
        <div className='max-w-[1100px] px-6 mx-auto'>
          <AnimatedButton href='/blogs'  label="Back To All Posts" className="white-btn w-fit load-more-btn mt-6  lg:mt-10" />

        </div>
        <div className="max-w-[1100px] px-6 w-full mx-auto pt-14 lg:pt-20 relative">


          <div className='max-w-4xl mx-auto text-center'>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{post.title}</h1>
            <p className=" mb-6 text-[#E6ECFF] max-w-3xl mx-auto opacity-70">
              {post.content}
            </p>
            <ul className="list-none space-y-3 text-[#E6ECFF] opacity-70 fw-200 mb-3 text-left justify-items-center mx-auto w-fit">
              <li className="flex items-center gap-2">
                <CheckSVG />
                React to sharp market movements with agility
              </li>
              <li className="flex items-center gap-2">
                <CheckSVG />
                Align strategies with global economic shifts
              </li>
              <li className="flex items-center gap-2">
                <CheckSVG />
                Manage risk during high-volatility periods
              </li>
            </ul>
            <div className='site-card2 my-8 p-0-card'>
              <Image src={post.image} alt={post.title} width={800} height={400} className="mx-auto" />
            </div>


          </div>
          <div className='py-5 lg:py-8 text-left'>
            <h5 className='text-2xl'>Why Economic News Matters</h5>
            <p className='text-[#E6ECFF] opacity-70 pt-2'>In forex, prices reflect not just technical charts but the underlying strength of economies. Reports like GDP growth, inflation numbers, or central bank rate decisions often trigger immediate shifts in currency values. For example, a strong U.S. jobs report can push the USD higher as traders anticipate tighter monetary policy.</p>
          </div>
          <div className='py-5 lg:py-8 text-left'>
            <h5 className='text-2xl'>Trading Around Major Events</h5>
            <p className='text-[#E6ECFF] opacity-70 py-2'>Unlike normal sessions, trading during news releases requires a plan. Key events such as Non-Farm Payrolls (NFP), Federal Reserve announcements, and CPI inflation reports can cause spreads to widen and prices to spike within seconds. Many traders adapt by:</p>
            <ul className="list-none space-y-3 text-[#E6ECFF] opacity-70 fw-200 mt-4">
              <li className="flex items-center gap-2">
                <CheckSVG />
                Entering positions just before or after a release
              </li>
              <li className="flex items-center gap-2">
                <CheckSVG />
                Using pending orders to catch sharp moves
              </li>
              <li className="flex items-center gap-2">
                <CheckSVG />
                Reducing lot sizes to manage unpredictable swings
              </li>
            </ul>
          </div>
          <div className='py-5 lg:py-8 text-left'>
            <h5 className='text-2xl'>Tools for News-Based Strategies</h5>
            <p className='text-[#E6ECFF] opacity-70 pt-2'>Economic calendars are the trader’s compass when it comes to news-driven strategies. By tracking scheduled events, you can anticipate volatility and prepare accordingly. Platforms like MetaTrader 5 with Jeta FX integrate news alerts, real-time data, and advanced charting tools that help you react quickly.</p>
          </div>
          <div className='py-5 lg:py-8 text-left'>
            <h5 className='text-2xl'>Balancing Opportunity and Risk</h5>
            <p className='text-[#E6ECFF] opacity-70 pt-2'>While news trading offers big opportunities, it also comes with high risk. Prices can jump erratically, slippage may occur, and emotions can cloud judgment. The best traders combine technical setups with an awareness of fundamentals, ensuring they don’t rely on news alone but use it as part of a broader strategy.</p>
          </div>
          <div className='py-5 lg:py-8 text-left'>
            <h5 className='text-2xl'>What’s Next for News Traders?</h5>
            <p className='text-[#E6ECFF] opacity-70 pt-2'>In 2025 and beyond, global events are expected to move markets faster than ever. From inflation cycles to geopolitical developments, traders who master news strategies will be better equipped to adapt. With the right tools, planning, and discipline, economic news can become a powerful ally in navigating the forex market.</p>
          </div>

        </div>
      </section >
      <section className="pt-7 lg:pt-12 pb-14 lg:pb-16 overflow-hidden relative">
        <div className="max-w-[1460px] px-6 w-full mx-auto  relative">
          <h4 className='text-2xl lg:text-4xl font-medium text-center'>Related Insights</h4>

          <div className='mt-10 lg:mt-15'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-14'>
              {blogsToDisplay.map((relatedPost) => (
                <div key={relatedPost.slug} className="site-card blog-card rounded-lg ">
                  <Image src={relatedPost.image} alt="blog img" width="400" height="250" className=' w-full rounded-xl' />
                  <div className='p-5 pt-3'>
                    <span className='text-sm text-[#E6ECFF] opacity-70 fw-200'>{relatedPost.date}</span>
                    <h2 className="text-2xl font-semibold my-3">
                      <Link href={`/blogs/${relatedPost.slug}`}>{relatedPost.title}</Link>
                    </h2>
                    <p className="text-[#E6ECFF] opacity-70">By {relatedPost.content}</p>
                    <Link className='text-[#E6ECFF] opacity-70 fw-200 cursor-pointer float-right mt-4' href={`/blogs/${relatedPost.slug}`}>Read More</Link>
                  </div>
                </div>
              ))}
            </div>
            {hasMoreRelatedBlogs && (
              <AnimatedButton onClick={handleLoadMoreRelated} label="Load More" className="white-btn w-fit load-more-btn mt-6  lg:mt-10 mx-auto" />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// -- Re-usable Check SVG icon (no JSX namespace needed) --
function CheckSVG() {
  return (
    <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.74999 9.3448L3.16699 10.9278L7.91699 15.6778L15.833 7.7608L14.25 6.1778L7.91699 12.5108L4.74999 9.3448Z" fill="#8AA5FF" />
    </svg>
  );
}