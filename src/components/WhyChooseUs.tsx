import { memo } from "react";

const REASONS = [
  "Multi-domain expertise across IT, BPO, and workforce management.", "Agile and scalable execution model.", "Skilled professionals and industry experience.", "Strong focus on innovation, automation, and compliance.",
  "Reliable long-term support and partnership approach." ] as const;

const ENGAGEMENT_MODELS = [ "Fixed Cost Projects.", "Dedicated Resources.", "Workforce Outsourcing.", "Time & Material.", "Per Seat / Per Agent.", "AMC." ] as const;

const HIGHLIGHTS = ["100% Client Satisfaction.", "World Class Worker."] as const;

const WhyChooseUs = () => {
  return (
    <section className="why-section" aria-labelledby="why-heading">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <div className="digi-about-content wow fadeInDown" >
              <div className="digi-about-tag">WHY DIGIVERA</div>

              <h2 className="digi-about-title" id="why-heading">
                WHY <span>CHOOSE US?</span>
              </h2>
            </div>

            <ul className="why-list">
              {REASONS.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>

            <h4 className="mt-4">
              ENGAGEMENT MODELS
            </h4>

            <p>
              <strong>Flexible commercial models that fit how you want to work.</strong>
            </p>

            <ul className="why-list small">
              {ENGAGEMENT_MODELS.map((model) => (
                <li key={model}>{model}</li>
              ))}
            </ul>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 position-relative mt-4 mt-lg-0">
            <div className="right-wrapper">
              {/* IMAGE 1 */}
              <div className="img-box img-one " >
                <img src="/assets/img/why1.webp" width={292} height={291} className="img-fluid" alt="Digivera team at work" loading="lazy" decoding="async" />
              </div>

              {/* IMAGE 2 */}
              <div className="img-box img-two wow fadeInUp" >
                <img src="/assets/img/why2.webp" width={292} height={322} className="img-fluid" alt="Digivera customer support in action" loading="lazy" decoding="async" />
              </div>

              {/* INFO CARD */}
              <div className="info-card " >
                <h5>TRUSTED BY 50+ HAPPY CUSTOMERS</h5>
                <ul>
                  {HIGHLIGHTS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(WhyChooseUs);