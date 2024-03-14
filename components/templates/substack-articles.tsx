import React, { useEffect, useState } from "react";
import { Container, Img } from "../shared";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const SubstackArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/substack");
        if (!res.ok) throw new Error("Failed to fetch articles");

        const data = (await res.json()) || [];
        setArticles(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchPosts();
  }, []);

  const handleNext = () => {
    const first = articles.shift();
    setArticles([...articles, first]);
  };

  const handlePrev = () => {
    const last = articles.pop();
    setArticles([last, ...articles]);
  };

  return (
    <Container size="large">
      <h1 className="text-3xl font-bold mb-4">Latest Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {articles.slice(0, 3).map((post, index) => (
          <div key={index} className="items-center bg-gray-100 p-4 rounded-lg transition transform duration-75">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-2">{post.subtitle}</p>
            <Img
              src={post.cover_image}
              alt="Substack Article Cover Image"
              size="small"
              radius="rounded-lg"
              className="mx-auto"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          className="bg-primary text-white p-2 rounded-full"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="bg-primary text-white p-2 rounded-full"
        >
          <FaArrowRight />
        </button>
      </div>
    </Container>
  );
};