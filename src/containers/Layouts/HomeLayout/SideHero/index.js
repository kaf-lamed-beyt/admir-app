import React from "react";
import { Onboarding } from "./style/sidehero.styled";
import Icon from "../../../../components/Icons";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const SideHero = () => {
  return (
    <Onboarding>
      <Link href="/">
        <div className="brand">
          <Fade direction="up" triggerOnce>
            <img src="/img/admir-lght.png" alt="admir logo" />
          </Fade>
        </div>
      </Link>
      <div className="onboarding-quote">
        <Fade direction="up" cascade triggerOnce>
          <h1 className="quotation-mark">"</h1>
          <p className="quote">
            Great companies have high cultures of accountability, it comes with
            this culture of criticism I was talking about before, and I think
            our culture is strong on that.
          </p>
          <div className="quote-author">
            <p>Steve Ballmer</p>
            <span>
              <Icon name="mark" />
            </span>
          </div>
          <div className="reverse-l">
            <Icon name="reverse-L" />
          </div>
        </Fade>
      </div>
    </Onboarding>
  );
};

export default SideHero;
