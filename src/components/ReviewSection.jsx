import React from "react";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

// Helper: Convert ISO date → "x time ago"
const timeAgo = (dateString) => {
  const now = new Date();
  const past = new Date(dateString);
  const diff = now - past;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
  if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
  if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  return "Just now";
};

const reviews = [
{
id: 1,
name: "Muhammad Umar",
rating: 5,
date: "2024-03-15",
text: "My car battery died unexpectedly in Abu Dhabi, and their mobile battery replacement service arrived within 30 minutes. The technician installed a new battery quickly and professionally.",
response: "Thank you for choosing Mohammad Khan Car Battery Replacement. We're glad we could get you back on the road quickly.",
avatar: "MU",
},
{
id: 2,
name: "Muthasim Cherichi",
rating: 5,
date: "2024-06-22",
text: "Excellent car battery replacement service in Mussafah. They supplied a genuine battery, explained the warranty clearly, and completed the installation on-site.",
response: "We appreciate your trust in our service. Providing genuine batteries with warranty is our commitment to every customer.",
avatar: "MC",
},
{
id: 3,
name: "Ali Raza",
rating: 5,
date: "2025-01-10",
text: "Fast response and affordable pricing. I needed emergency car battery replacement late at night, and the team arrived promptly with the correct battery for my vehicle.",
response: null,
avatar: "AR",
},
{
id: 4,
name: "Ayesha Khan",
rating: 5,
date: "2025-04-18",
text: "Highly recommended for car battery delivery and installation in Abu Dhabi. The technician was professional, and the replacement process was completed in just a few minutes.",
response: "Thank you for your recommendation. We're happy our battery replacement team could assist you efficiently.",
avatar: "AK",
},
];

const ReviewsSection = () => {
  // JSON-LD structured data for AutoPartsStore and Reviews
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    name: "Mohammad Khan Car Battery Replacement",
    url: "https://mkcarbatteries.com",
    description: "Professional on-site car battery replacement and delivery service in Abu Dhabi & Mussafah.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: (
        reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      ).toFixed(1),
      reviewCount: reviews.length,
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: r.text,
      datePublished: r.date,
      itemReviewed: {
        "@type": "AutoPartsStore",
        name: "Mohammad Khan Car Battery Replacement",
        url: "https://mkcarbatteries.com",
      },
    })),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="reviews"
      className="py-20 bg-base-100"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={itemVariants}
          >
            <h2
              id="reviews-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-base-content mb-6 tracking-tight"
            >
              Trusted by Abu Dhabi Drivers
            </h2>
            <p className="text-lg text-base-content/80 leading-relaxed">
              Read real feedback from customers who relied on us for fast, professional car battery replacement across Abu Dhabi and Mussafah.
            </p>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reviews.map((review) => (
            <motion.li key={review.id} variants={itemVariants}>
              <article
                className="h-full bg-base-200 rounded-2xl p-6 sm:p-8 border border-base-300 shadow-sm flex flex-col"
                itemScope
                itemType="https://schema.org/Review"
              >
                {/* Reviewer Header */}
                <header className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary tracking-wider">
                      {review.avatar}
                    </div>
                    <div>
                      <h3
                        className="font-semibold text-base-content"
                        itemProp="author"
                      >
                        {review.name}
                      </h3>
                      <time
                        dateTime={review.date}
                        className="text-sm text-base-content/60"
                      >
                        {timeAgo(review.date)}
                      </time>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div
                    className="flex text-warning"
                    itemProp="reviewRating"
                    itemScope
                    itemType="https://schema.org/Rating"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "fill-current" : "text-base-300"}`}
                      />
                    ))}
                    <meta itemProp="ratingValue" content={review.rating} />
                    <meta itemProp="bestRating" content="5" />
                  </div>
                </header>

                {/* Review Body */}
                <p
                  className="text-base-content/80 leading-relaxed flex-grow"
                  itemProp="reviewBody"
                >
                  "{review.text}"
                </p>

                {/* Owner Response */}
                {review.response && (
                  <div className="mt-6 pt-5 border-t border-base-300">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-primary text-sm">
                        Mohammad Khan Car Battery Replacement
                      </span>
                    </div>
                    <p className="text-sm text-base-content/70 leading-relaxed">
                      {review.response}
                    </p>
                  </div>
                )}
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </section>
  );
};

export default ReviewsSection;