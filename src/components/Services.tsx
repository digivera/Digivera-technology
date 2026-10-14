import { Fragment, memo } from "react";

type Service = {
  icon: string;
  /** Each entry is rendered on its own line inside the <h3> */
  title: readonly string[];
  /** Each entry is rendered on its own line inside the <p> */
  points: readonly string[];
  animation: "fadeInLeft" | "fadeInDown" | "fadeInRight" | "fadeInUp";
};

/* Defined once, outside the component */
const SERVICES: readonly Service[] = [
  {
    icon: "bi-display",
    title: ["SOFTWARE", "DEVELOPMENT"],
    points: ["Web & Mobile App Development", "Enterprise Software Solutions", "API Development & Integration"],
    animation: "fadeInLeft",
  },
  {
    icon: "bi-cpu",
    title: ["AI", "SOLUTIONS"],
    points: ["Predictive Analytics.", "AI Chatbots & Virtual Assistants.", "Data Intelligence & Insights."],
    animation: "fadeInDown",
  },
  {
    icon: "bi-gear",
    title: ["AUTOMATION", "SOLUTIONS"],
    points: ["Robotic Process Automation (RPA).", "Workflow Automation.", "Process Optimization."],
    animation: "fadeInDown",
  },
  {
    icon: "bi-megaphone",
    title: ["DIGITAL", "MARKETING"],
    points: ["SEO & Performance Marketing.", "Social Media Marketing.", "Lead Generation."],
    animation: "fadeInRight",
  },
  {
    icon: "bi-shield-check",
    title: ["CYBERSECURITY", "& MANAGEMENT"],
    points: ["VAPT.", "Network & Application Security.", "Security Audits & Risk Management."],
    animation: "fadeInLeft",
  },
  {
    icon: "bi-file-earmark-check",
    title: ["COMPLIANCE", "& RISK"],
    points: ["Compliance Consulting.", "Policy Development.", "Audit Support & Risk Assessment."],
    animation: "fadeInUp",
  },
  {
    icon: "bi-headset",
    title: ["CALL CENTER /", "BPO"],
    points: ["Inbound & Outbound Call Services.", "Customer Support Operations.", "Back Office Processing."],
    animation: "fadeInUp",
  },
  {
    icon: "bi-tools",
    title: ["HELPDESK &", "IT SUPPORT"],
    points: ["24/7 IT helpdesk, infrastructure management and end-user support services."],
    animation: "fadeInRight",
  },
];

/** Renders strings separated by <br /> (no trailing break) */
const Lines = ({ lines }: { lines: readonly string[] }) => (
  <>
    {lines.map((line, i) => (
      <Fragment key={line}>
        {i > 0 && <br />}
        {line}
      </Fragment>
    ))}
  </>
);

const Services = () => {
  return (
    <section className="digi-services-section dark_bg" aria-labelledby="services-heading">
      <div className="container digi-services-container">
        {/* HEADING */}
        <div className="digi-about-content text-center full-w wow fadeInDown" data-wow-delay="0.5s">
          <div className="digi-about-tag">OUR SERVICES</div>

          <h2 className="digi-about-title" id="services-heading">
            END-TO-END SERVICES THAT <br />
            <span>SCALE YOUR BUSINESS</span>
          </h2>

          <p className="digi-subtitle-text">
            A full stack of capabilities — from custom software and AI to BPO and managed IT support — delivered by a
            single accountable partner.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div className="row">
          {SERVICES.map(({ icon, title, points, animation }) => (
            <div className="col-12 col-md-6 col-lg-3" key={title.join(" ")}>
              <div className={`digi-service-item wow ${animation}`} data-wow-delay="0.1s">
                <div className="digi-service-icon">
                  <i className={`bi ${icon}`} aria-hidden="true" />
                </div>

                <div className="digi-service-content">
                  <h3>
                    <Lines lines={title} />
                  </h3>
                  <p>
                    <Lines lines={points} />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Services);