import React from "react";
import { Anchore, Container, LogoImage } from "../atoms";

const Logo = () => {
  return (
    <Container>
      <div className="logo">
        <Anchore to="/">
          <LogoImage
            src="https://assets.prothomalo.com/prothomalo/assets/palo-bangla-bb996cdb70d2e0ccec8c.svg"
            alt="প্রথম আলো লোগো"
          />
        </Anchore>
      </div>
    </Container>
  );
};

export default Logo;
