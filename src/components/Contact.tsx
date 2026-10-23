import { useEffect, useState } from 'react';
import FAQ from '../pages/FAQ';
import { Link } from 'react-router-dom';

/* ---- Edit these to match your real details ---- */
const OFFICE = {
  name: 'DigiVera Technologies',
  address: 'Ace City, Greater Noida West, Uttar Pradesh',
  phone: ['+91 87962 94441', '+91 87962 94442'],
  openDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  openMinutes: 10 * 60, // 10:00 AM IST
  closeMinutes: 19 * 60, // 7:00 PM IST
  directions: 'https://www.google.com/maps/search/?api=1&query=Ace+City+Greater+Noida+West',
};

const MAP_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.400260608663!2d77.43484180581231!3d28.56675776120811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceeb705b1e687%3A0x7e80db4bb743082!2sAce%20City%20by%20Ace%20Group!5e0!3m2!1sen!2sin!4v1779380509496!5m2!1sen!2sin';

const isOpenNow = () => {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(new Date());
  const pick = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  const minutes = (parseInt(pick('hour'), 10) % 24) * 60 + parseInt(pick('minute'), 10);
  return OFFICE.openDays.includes(pick('weekday')) && minutes >= OFFICE.openMinutes && minutes < OFFICE.closeMinutes;
};

const Contact = () => {
  const [open, setOpen] = useState(isOpenNow);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const id = window.setInterval(() => setOpen(isOpenNow()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(OFFICE.address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable: the address is still visible and selectable */
    }
  };
  return (
    <>
      <section className="digi-about-wrapper pb-5 bg-light">
        <div className="container-fluid p-0">
          <div className="row align-items-center g-0">
            <div className="col-lg-12">
              <div className="digi-about-image">
                <iframe className="mapframe d-block w-100 border-0" style={{ height: '60vh', minHeight: 380 }} title="Map showing DigiVera Technologies office location at Ace City, Greater Noida West" src={MAP_SRC} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          </div>
        </div>

        {/* Office card overlapping the map; full width on mobile, left-aligned on desktop */}
        <div className="container position-relative" style={{ marginTop: -90 }}>
          <div className="row">
            <div className="col-lg-5">
              <div className="card border-0 shadow-lg rounded-4">
                <div className="card-body p-4">
                  <p className={`d-inline-flex align-items-center gap-2 rounded-pill px-3 py-1 small mb-3 ${open ? 'bg-success-subtle text-success-emphasis' : 'bg-secondary-subtle text-secondary-emphasis' }`} role="status" >
                    {open ? (
                      <span className="spinner-grow text-success" style={{ width: 8, height: 8 }} aria-hidden="true" />
                    ) : (
                      <span className="d-inline-block rounded-circle bg-secondary" style={{ width: 8, height: 8 }} aria-hidden="true" />
                    )}
                    {open ? 'Open now, until 7:00 PM IST' : 'Closed now. Opens 10:00 AM IST'}
                  </p>

                  <h2 className="h4 fw-bold mb-1">{OFFICE.name}</h2>
                  <address className="text-secondary mb-3">{OFFICE.address}</address>

                  <div className="d-flex flex-wrap gap-2">
                    <Link className="btn btn-primary rounded-pill px-4" to={OFFICE.directions} target="_blank" rel="noreferrer">
                      Get directions
                    </Link>
                    <button type="button" className="btn btn-outline-secondary rounded-pill px-4" onClick={copyAddress}>
                      {copied ? 'Address copied' : 'Copy address'}
                    </button>
                  </div>
                  <div className="mt-3">
                    {OFFICE.phone.map((phone, index) => (
                      <Link key={index} className="me-3" to={`tel:${phone.replace(/\s/g, "")}`} ><i className="bi bi-telephone-fill"></i> {phone} </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
};

export default Contact;