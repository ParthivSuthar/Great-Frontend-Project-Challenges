import React from 'react';
import img from "../img/spacejoy-YqFz7UMm8qE-unsplash.jpg";

function BlogCard() {
  return (
    <div className="max-w-sm mx-5 md:mx-auto lg:mx-auto my-12 rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Image Section */}
      <img src={img} alt="Living Room Inspiration" className="w-full h-64 object-cover" />

      {/* Content Section */}
      <div className="p-4">
        {/* Tag */}
        <p className="inline-block text-sm text-green-600 border border-green-600 rounded px-2 py-1">
          Interior
        </p>

        {/* Title */}
        <h2 className="mt-3 text-lg font-bold text-gray-800">
          Top 5 Living Room Inspirations
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-600">
          Curated vibrant colors for your living, make it pop & calm at the same time.
        </p>

        {/* Link */}
        <a
          href="#"
          className="mt-3 text-blue-600 text-sm flex items-center hover:underline"
        >
          Read more <span className="ml-1">→</span>
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
