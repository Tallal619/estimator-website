import React, { useState } from "react";

const questions = [
  { question: "What is construction estimating?", answer: "It is the process of calculating the cost of a construction project." },
  { question: "How long will my estimate take?", answer: "It typically takes 2-3 business days depending on the complexity." },
  { question: "What is the cost of an estimate?", answer: "It varies, but we offer free estimates for small projects." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        {questions.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full text-left text-lg font-medium p-4 bg-blue-100 hover:bg-blue-200 rounded-lg"
            >
              {item.question}
            </button>
            {open === index && <p className="p-4 bg-gray-50">{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
