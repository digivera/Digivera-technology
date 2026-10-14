type Step = {
  title: string;
  text: string;
  img: string;
  animation: "fadeInLeft" | "fadeInUp" | "fadeInRight";
  delay: string;
};

const STEPS: Step[] = [
  { title: "Discover", text: "Discover new possibilities. Unlock smarter growth.", img: "discover", animation: "fadeInLeft",  delay: "0.3s" },
  { title: "Design",   text: "Design smart solutions. Build for impact.",           img: "design",   animation: "fadeInLeft",  delay: "0.1s" },
  { title: "Develop",  text: "Develop scalable solutions. Drive real results.",     img: "develop",  animation: "fadeInUp",    delay: "0.1s" },
  { title: "Deploy",   text: "Deploy with precision. Scale with confidence.",       img: "deploy",   animation: "fadeInUp",    delay: "0.3s" },
  { title: "Support",  text: "Support that never stops. Always by your side.",      img: "support",  animation: "fadeInRight", delay: "0.1s" },
  { title: "Manage",   text: "Manage with control. Optimize every move.",           img: "manage",   animation: "fadeInRight", delay: "0.3s" },
];

const Industries = () => (
  <section className="approach-section dark_bg" aria-labelledby="approach-heading">
    <div className="container">
      <div className="digi-about-content wow fadeInDown" data-wow-delay="0.1s">
        <div className="digi-about-tag">OUR APPROACH</div>
        <h2 id="approach-heading" className="digi-about-title">
          STRUCTURED &amp; AGILE <span>METHODOLOGY</span>
        </h2>
      </div>

      <div className="row g-4">
        {STEPS.map(({ title, text, img, animation, delay }) => (
          <div key={title} className="col-lg-2 col-md-4 col-6">
            <article className={`approach-box wow ${animation}`} data-wow-delay={delay}>
              <img src={`/assets/img/${img}.webp`} width={330} height={215} className="img-fluid" alt={title} loading="lazy" decoding="async" />
              <h3 className="h5">{title.toUpperCase()}</h3>
              <p>{text}</p>
            </article>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Industries;