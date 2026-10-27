import { memo, useEffect, useRef } from "react";

type SwiperInstance = {
  destroy: (deleteInstance?: boolean, cleanStyles?: boolean) => void;
};

type SwiperConstructor = new (container: Element, options: Record<string, unknown>) => SwiperInstance;

declare global {
  interface Window {
    Swiper?: SwiperConstructor;
  }
}

type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
};

/* Defined once, outside the component */
const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: "rahul",
    name: "Rahul",
    role: "Hospital Admin",
    quote: "Excellent service and professional team.",
    image: "/assets/img/test1.webp",
  },
  {
    id: "pooja",
    name: "Pooja",
    role: "Experienced Customer",
    quote: "Fill out the form below to schedule an appointment or inquire about our services.",
    image: "/assets/img/test2.webp",
  },
  {
    id: "alisone",
    name: "Alisone",
    role: "Grand Party rental",
    quote: "Fill out the form below to schedule an appointment or inquire about our services.",
    image: "/assets/img/test3.webp",
  },
  {
    id: "rohan",
    name: "Rohan",
    role: "Hospital Admin",
    quote: "Excellent service and professional team.",
    image: "/assets/img/rohan.webp",
  },
];

const BASE_OPTIONS = {
  slidesPerView: 1, // mobile-first default; breakpoints scale it up
  spaceBetween: 25,
  loop: true,
  speed: 800,
  breakpoints: {
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
};

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let swiper: SwiperInstance | null = null;

    const init = () => {
      if (!window.Swiper || swiper) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      swiper = new window.Swiper(el, {
        ...BASE_OPTIONS,
        // Respect users who prefer reduced motion; pause on hover so cards are readable
        autoplay: reduceMotion
          ? false
          : { delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true },
      });
    };

    if (window.Swiper) {
      init();
    } else {
      // Swiper CDN script may still be loading when React mounts
      window.addEventListener("load", init, { once: true });
    }

    return () => {
      window.removeEventListener("load", init);
      swiper?.destroy(true, true);
      swiper = null;
    };
  }, []);

  return (
    <section className="ts-section" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="quoteout" aria-hidden="true">"</div>

        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-4 mb-4">
            <div className="w-100 title_sec " >
              <p className="lb-tag">TESTIMONIALS</p>
              <h2 className="main-title" id="testimonials-heading">
                What Our Customers Say
              </h2>
              <p className="subtitle">
                Real experiences and honest feedback from people who trust us, reflecting genuine satisfaction,
                meaningful results, and lasting relationships built over time.
              </p>
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div className="col-lg-8">
            <div className="swiper wow fadeInUp"  ref={containerRef}>
              <div className="swiper-wrapper">
                {TESTIMONIALS.map(({ id, name, role, quote, image }) => (
                  <div className="swiper-slide" key={id}>
                    <div className="ts-card">
                      <img src={image} className="ts-img"
                        alt={`Photo of ${name}`}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="quote" aria-hidden="true">"</div>
                      <div className="ts-content">
                        <p>{quote}</p>
                        <h6>{name}</h6>
                        <p>
                          <span>{role}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Testimonials);