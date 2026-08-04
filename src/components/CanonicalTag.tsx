import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://www.digivera.co.in';

function CanonicalTag() {
  const location = useLocation();

  useEffect(() => {
    const canonicalPath = location.pathname === '/' ? '/' : location.pathname;
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;

    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;

    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }

    link.setAttribute('href', canonicalUrl);
  }, [location.pathname]);

  return null;
}

export default CanonicalTag;
