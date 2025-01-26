import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import img1 from '../assets/1.jfif'
import img2 from '../assets/2.jfif'
import img4 from '../assets/4.jfif'
import img5 from '../assets/5.jfif'
import img6 from '../assets/6.jfif'

const data = [
    {
      id: 1,
      image: img1,
      author: "Prabhash Mishra",
      date: "1 Jan 2023 • Today",
      title: "Small Business & Startup",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: ["Tax & Audit", "Management"],
    },
    {
      id: 2,
      image: img2,
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Tax", "Research", "Compliance"],
    },
    {
      id: 3,
      image: img1,
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      title: "Growing Business Package",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: ["Audit", "Money Back"],
    },
    {
      id: 4,
      image: img4,
      author: "Karan Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Collaboration can make our teams stronger, and our individual designs better.",
      tags: ["Money", "Management"],
    },
    {
      id: 5,
      image: img5,
      author: "Richa Singh",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
      tags: ["Tax Return", "News", "About"],
    },
    {
      id: 6,
      image: img6,
      author: "Miss Nora",
      date: "1 Jan 2023",
      title: "Small Business & Startup",
      description:
        "Starting a community doesn’t need to be complicated, but how do you get started?",
      tags: ["Private Company Limited", "Customer Success"],
    }
  ];

  const colors = [
    "bg-green-100 text-green-600",
    "bg-blue-100 text-blue-600",
    "bg-purple-100 text-purple-600",
    "bg-yellow-100 text-yellow-600",
    "bg-pink-100 text-pink-600",
    "bg-red-100 text-red-600",
    "bg-teal-100 text-teal-600",
  ];
  
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
const Blogs = () => {
  return (
    <div className="p-6 mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white overflow-hidden flex gap-4 flex-col"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 flex flex-col gap-4">
              <p className="text-gray-600 text-sm">
                {item.author} • {item.date}
              </p>
              <h3 className="text-xl font-semibold text-gray-800 flex items-center justify-between">
                <div>{item.title}</div><MdArrowOutward/>
              </h3>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`py-1 px-2 rounded text-xs font-medium ${getRandomColor()}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blogs