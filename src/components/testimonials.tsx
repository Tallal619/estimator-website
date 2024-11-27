import React from "react";

const testimonials = [
  {
    name: "John Doe",
    feedback: "The estimation was spot on! Saved us so much time and money.",
    location: "California",
  },
  {
    name: "Sarah Smith",
    feedback: "Fast and accurate service. Would highly recommend.",
    location: "Texas",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-blue-50 py-16 text-center">
      <h2 className="text-3xl font-semibold mb-8">What Our Clients Say</h2>
      <div className="space-y-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded-lg max-w-2xl mx-auto">
            <p className="text-lg italic mb-4">&quot;{testimonial.feedback}&quot;</p>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-gray-500">{testimonial.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
