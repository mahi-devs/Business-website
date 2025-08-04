import React from "react";
import { FaCommentAlt } from "react-icons/fa";
import blog1 from '../../assets/images/blog-thumb-1.jpg'
import blog2 from '../../assets/images/blog-thumb-2.jpg'
import blog3 from '../../assets/images/blog-thumb-3.jpg'
import avater from '../../assets/images/avatar.jpg'

const articles = [
  {
    id: 1,
    title: "Common Tax Mistakes",
    category: "Business",
    description:
      "Tax season can be a stressful time for small business owners, especially when navigating the complex web of tax...",
    date: "15",
    month: "JAN",
    image: blog1,
    author: "John Doe",
    comments: 5,
  },
  {
    id: 2,
    title: "Cash and Accrual Accounting",
    category: "Business",
    description:
      "Many business owners struggle with choosing the right accounting method for their business. This blog post would...",
    date: "15",
    month: "JAN",
    image: blog2,
    author: "John Doe",
    comments: 5,
  },
  {
    id: 3,
    title: "Prepare for a Financial Audit",
    category: "Business",
    description:
      "Preparing for a financial audit can be daunting for businesses, but it doesn't have to be...",
    date: "15",
    month: "JAN",
    image: blog3,
    author: "John Doe",
    comments: 5,
  },
];

const News = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 px-6">
      <h2 className="text-[56px] font-semibold font-lexend text-quaternary text-center mb-12">Latest News</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1"
          >
            <div className="relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-60 object-cover"
              />
              <div className="absolute top-4 left-4 bg-white rounded-md text-center shadow px-2 py-1">
                <p className="text-lg font-bold text-black">{article.date}</p>
                <p className="text-xs text-green-600 font-semibold">
                  {article.month}
                </p>
              </div>
              <div className="absolute top-4 right-4 bg-green-600 text-white rounded-full text-xs w-7 h-7 flex items-center justify-center">
                <FaCommentAlt className="text-sm" />
                <span className="ml-1 text-[10px]">{article.comments}</span>
              </div>
            </div>

            <div className="p-5">
              <span className="text-xs bg-black text-white px-2 py-1 rounded-full font-medium font-lexend">
                {article.category}
              </span>
              <h3 className="text-xl font-bold mt-2">{article.title}</h3>
              <p className="text-tertiary text-sm w-[308px] mt-2">{article.description}</p>

              <a href="#" className="text-green-600 text-sm font-semibold mt-4 inline-block">
                Read More →
              </a>

              <div className="flex items-center mt-4">
                <img
                  src={avater}
                  alt="Author"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <p className="text-sm text-black font-semibold">by {article.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
