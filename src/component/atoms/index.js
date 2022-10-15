import { Link } from "react-router-dom";

// container
export const Container = ({ children }) => (
  <div className="container">{children}</div>
);
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
    {heading && <Heading heading={heading} />}
    <h3 className="heading">
      {subtitle && <span className="sub_heading">{subtitle}</span>}
      {title}
    </h3>
  </div>
);

// Anchores/Links
export const Anchore = ({
  children,
  to = "/",
  target = "",
  callBack = () => {},
}) => (
  <span className="anchore" tabIndex={0} role="button" onClick={callBack}>
    <Link to={to} target={target}>
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

// Ago Time
export const AgoTime = ({ time = "১", customClass = "" }) => (
  <span className={`${customClass} ago_time`}>{time} মিনিট আগে</span>
);

// details page -- topic
export const Topic = ({ content }) => <h3 className={`topic`}>{content}</h3>;

// description
export const Description = ({ content }) => (
  <div className={`description`}>{content}</div>
);
