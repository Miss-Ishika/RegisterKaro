import React from 'react'
import { FaChevronRight } from "react-icons/fa";

const Queries = () => {

    const questions = [
        "Can I recover deleted files from desktop with this software?",
        "Can I recover deleted files from desktop with this software?",
        "Can I recover deleted files from desktop with this software?",
        "Can I recover deleted files from desktop with this software?",
        "Can I recover deleted files from desktop with this software?",
      ];

  return (
    <div className="p-6 w-full space-y-4">
      {questions.map((question, index) => (
        <div
          key={index}
          className="flex items-center justify-between border border-gray-300 rounded-lg shadow-lg hover:shadow-md"
        >
          <div className='flex gap-8 items-center'>
          <div className='w-2 h-16 rounded-l-lg bg-gradient-to-t from-blue-900 to-yellow-500'></div>
          <span className="text-gray-800 text-lg font-semibold py-4">{question}</span>
          </div>
        <FaChevronRight className='text-2xl mr-8 text-slate-600'/>
        </div>
      ))}

    </div>
  )
}

export default Queries