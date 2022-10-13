// Logo
export const LogoImage = ({ src, alt }) => (
  <img src={src} alt={alt} loading="eager" />
);

// Post elements
export const PostImage = ({ src, alt }) => (
  <img src={src} alt={alt} loading="lazy" />
);

export const PostTitle = ({ children }) => (
  <h1 style={{ textAlign: "center" }}>{children}</h1>
);

// List Tab section
