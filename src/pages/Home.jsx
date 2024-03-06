import React from "react";
import { BlogCard, HeroSection } from "../components";

function Home() {
  return (
    <main className="min-h-[40rem] py-2">
      <HeroSection />

      {/* Blogs Grid */}
      <div className="mx-8 sm:px-8 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </main>
  );
}

export default Home;
