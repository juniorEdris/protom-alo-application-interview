import { Link } from "react-router-dom";

// Logo
export const LogoImage = ({ src, alt }) => (
  <img src={src} alt={alt} loading="eager" />
);

// Post elements
export const PostImage = ({ src = "", alt = "" }) => (
  <img className="post_image" src={src} alt={alt} loading="lazy" />
);

export const NewsHeading = ({ title = "", subtitle = "", heading }) => (
  <div className="news_heading">
    <Heading heading={heading} />
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
      {" "}
      {/** add to var */}
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

export const Heading = ({ heading, customClass = "" }) => (
  <h1 className={`${customClass}`}>{heading}</h1>
);

// Overlay

export const PrimaryOverlay = () => <div className="primary_overlay" />;

// Ad Section
export const AdSection = ({ children }) => (
  <div className="ad_section">{children}</div>
);
