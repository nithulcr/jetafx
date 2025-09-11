
"use client";

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import { blogPosts } from './data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from "next/image";
import AnimatedButton from "@/components/AnimatedButton";


import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function BlogListPage() {
  const blogsRef = useRef<HTMLDivElement | null>(null);
  const [visibleBlogsCount, setVisibleBlogsCount] = useState(6);

  useEffect(() => {
    if (!blogsRef.current) return;
    const ctx = gsap.context(() => {
      const fadeUps = blogsRef.current!.querySelectorAll(".fade-up");
      gsap.fromTo(
        fadeUps,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.12 }
      );
    }, blogsRef);
    return () => ctx.revert();
  }, []);

  const handleLoadMore = () => {
    setVisibleBlogsCount(prevCount => prevCount + 6);
  };

  const blogsToDisplay = blogPosts.slice(0, visibleBlogsCount);
  const hasMoreBlogs = visibleBlogsCount < blogPosts.length;

  return (
    <>
      <Header />
      <section ref={blogsRef} className=" other-section pt-14 lg:pt-22 pb-14 lg:pb-22  overflow-hidden relative">

        <div className="max-w-[1460px] px-6 w-full mx-auto pt-14 lg:pt-20">
          <div className='relative'>
            <div className='fade-up max-w-3xl mx-auto text-center'>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 fade-up">Latest News & Blog</h1>
              <p className="fade-up text-slate-200 mb-6 text-[#E6ECFF] opacity-70">
                Stay informed with the latest articles, market insights, and trading tips from the Jeta FX team. Our blog is designed to help traders at every level — from beginners learning the basics to experienced investors exploring advanced strategies.
              </p>
            </div>
          </div>
        </div>
        <div className='max-w-[1460px] mx-auto px-6 mt-10 lg:mt-30'>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-14 fade-up">
            {blogsToDisplay.map((post) => (
              <div key={post.slug} className="site-card blog-card rounded-lg ">
                <Image src={post.image} alt="blog img" width="400" height="250" className=' w-full rounded-xl' />
                <div className='p-5 pt-3'>
                  <span className='text-sm text-[#E6ECFF] opacity-70 fw-200'>{post.date}</span>
                  <h2 className="text-2xl font-semibold my-3">
                    <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-[#E6ECFF] opacity-70">By {post.content}</p>
                  <Link className='text-[#E6ECFF] opacity-70 fw-200 cursor-pointer float-right mt-4' href={`/blogs/${post.slug}`}>Read More</Link>
                </div>
              </div>
            ))}
          </div>
          {hasMoreBlogs && (
           <AnimatedButton onClick={handleLoadMore} label="Load More" className="white-btn w-fit load-more-btn mt-6  lg:mt-10 mx-auto" />
          )}
        </div>
      </section>

      <Footer />
    </>

  );
}

