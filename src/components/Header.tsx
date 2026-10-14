import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const getActiveClass = (path: string) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <>
      <div className="top-bar py-2 bg_light">
        <div className="container">
          <div className="row align-items-center">

            {/* LEFT INFO */}
            <div className="col-lg-10 col-md-10 col-12 text-md-start text-center mb-2 mb-md-0">
              <ul className="list-inline mb-0 top-info wow fadeInLeft" data-wow-delay="0.1s">

                <li className="list-inline-item me-3">
                  <i className="bi bi-telephone-fill"></i>
                  +91 87962 94441, +91 87962 94442
                </li>

                <li className="list-inline-item me-3">
                  <i className="bi bi-envelope-fill"></i>
                  customersupport@digivera.co.in
                </li>

                <li className="list-inline-item">
                  <i className="bi bi-geo-alt-fill"></i>
                  G-103, AceCity, Sector 1, Greater Noida West, Uttar Pradesh-201306
                </li>

              </ul>
            </div>

            {/* SOCIAL ICONS */}
            <div className="col-lg-2 col-md-2 col-12 text-md-end text-center">
              <div className="social-icons wow fadeInRight" data-wow-delay="0.1s">

                <a href="javascript:void(0)" className="text-danger" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>

                <a href="javascript:void(0)" className="text-primary" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>

                <a href="javascript:void(0)" className="text-danger" aria-label="YouTube">
                  <i className="bi bi-youtube"></i>
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container">

          {/* LOGO */}
          <Link className="navbar-brand d-flex align-items-center wow fadeInLeft" data-wow-delay="0.1s" to="/">
            <img src="/assets/img/logo.webp" width={230} height={74} fetchPriority="high" alt="logo" className="logo-img" />
          </Link>

          {/* TOGGLER */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          {/* MENU */}
          <div className="collapse navbar-collapse justify-content-end" id="mainNav">
            <ul className="navbar-nav wow fadeInRight" data-wow-delay="0.1s">

              <li className="nav-item">
                <Link className={getActiveClass("/")} to="/">HOME</Link>
              </li>

              <li className="nav-item">
                <Link className={getActiveClass("/about-us")} to="/about-us">ABOUT US</Link>
              </li>

              <li className="nav-item">
                <Link className={getActiveClass("/services")} to="/services">SERVICES</Link>
              </li>

              <li className="nav-item">
                <Link className={getActiveClass("/industries")} to="/industries">INDUSTRIES</Link>
              </li>

              <li className="nav-item">
                <Link className={getActiveClass("/why-us")} to="/why-us">WHY US</Link>
              </li>

              <li className="nav-item">
                <Link className={getActiveClass("/contact-us")} to="/contact-us">CONTACT US</Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>

    </>
  );
};

export default Header;