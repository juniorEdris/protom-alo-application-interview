import { Link } from "react-router-dom";

// Logo
export const LogoImage = ({ src, alt }) => (
  <img src={src} alt={alt} loading="eager" />
);

// Post elements
export const PostImage = ({ src, alt }) => (
  <img src={src} alt={alt} loading="lazy" />
);

export const NewsHeading = ({ title = "", subtitle = "" }) => (
  <div className="news_heading">
    <h1>১</h1>
    <h3 className="heading">
      {subtitle && <span className="sub_heading">{subtitle}</span>}
      {title}
    </h3>
  </div>
);

// Anchores/Links
export const Anchore = ({ children, id }) => (
  <span className="anchore">
    <Link to={`/details/${id}`} target="_blank">
      {children}
    </Link>
  </span>
);

// List Tab section

export const TabButton = ({ tab, customClass, handleTab }) => (
  <span
    className={`tab_button cursor-pointer ${customClass}`}
    onClick={handleTab}
    tabIndex="0"
    role="button"
  >
    {tab}
  </span>
);
