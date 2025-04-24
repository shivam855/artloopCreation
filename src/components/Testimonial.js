import React, { useEffect, useState } from 'react';

// Sample testimonials data
const testimonials = [
  {
    quote: "Artloop nailed our vision in the very first draft. Couldn’t be happier!",
    author: "― Jaya Malhotra, Founder at Earth & Co."
  },
  {
    quote: "Working with Artloop was seamless and inspiring.",
    author: "― Ravi Sharma, CEO at DesignMatrix"
  },
  {
    quote: "They understood our brand better than we did. Highly recommend!",
    author: "― Ayesha Khan, Director at Creatify"
  },
  {
    quote: "Incredible turnaround and stunning results.",
    author: "― Zain Patel, Head of Product at SparkSoft"
  },
  {
    quote: "Truly a creative powerhouse. Our go-to agency for everything visual.",
    author: "― Mansi Verma, Co-founder at TrendX"
  }
];

function Testimonial() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-section">
      <p className="testimonial-title">Client Talk</p>
      <blockquote className="testimonial-quote">
        “{testimonials[current].quote}”
      </blockquote>
      <cite className="testimonial-author">{testimonials[current].author}</cite>

      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <span key={index} className={`dot ${current === index ? 'active' : ''}`}></span>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
