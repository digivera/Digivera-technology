import { memo } from "react";

type Industry = {
  name: string;
  image: string;
  alt: string;
  animation: "fadeInLeft" | "fadeInDown" | "fadeInRight" | "fadeInUp";
};

/* Defined once, outside the component */
const INDUSTRIES: readonly Industry[] = [
  { name: "HEALTHCARE", image: "healthcare", alt: "Healthcare industry", animation: "fadeInLeft" },
  { name: "IT & ITES", image: "it", alt: "IT and ITES industry", animation: "fadeInDown" },
  { name: "BANKING & FINANCE", image: "banking", alt: "Banking and finance industry", animation: "fadeInRight" },
  { name: "RETAIL & E-COMMERCE", image: "retail", alt: "Retail and e-commerce industry", animation: "fadeInLeft" },
  { name: "MANUFACTURING", image: "manufacturing", alt: "Manufacturing industry", animation: "fadeInUp" },
  { name: "STARTUPS & SMES", image: "startups", alt: "Startups and SMEs", animation: "fadeInRight" },
];

const Industries = () => {
  return (
    <section className="industries-section" aria-labelledby="industries-heading">
      <div className="container">
        {/* HEADING */}
        <div className="digi-about-content text-center full-w wow fadeInDown" >
          <div className="digi-about-tag">INDUSTRIES</div>

          <h2 className="digi-about-title" id="industries-heading">
            INDUSTRIES <span>WE SERVE</span>
          </h2>

          <p className="digi-subtitle-text">
            Deep domain experience across regulated and fast-moving sectors.
          </p>
        </div>

        {/* CARDS */}
        <div className="row g-4">
          {INDUSTRIES.map(({ name, image, alt, animation }) => (
            <div className="col-12 col-md-6 col-lg-4" key={name}>
              <div className={`industry-card wow ${animation}`}>
                <img src={`/assets/img/${image}.webp`} width={684} height={454} className="img-fluid" alt={alt} loading="lazy" decoding="async" sizes="(min-width: 992px) 33vw, (min-width: 768px) 50vw, 100vw" />
                <div className="industry-label">
                  <span>{name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Industries);