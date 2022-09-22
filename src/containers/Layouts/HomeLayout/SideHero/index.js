import React from "react";
import { Onboarding } from "./style/sidehero.styled";
import Icon from "../../../../components/Icons";
import Link from "next/link";
import dynamic from "next/dynamic";

const Status = dynamic(
  () => import("status-modal/dist").then((mod) => mod.Status),
  {
    ssr: false,
  }
);

const SideHero = () => {
  return (
    <Onboarding>
      <Link href="/">
        <div className="brand">
          <img src="/img/admir-lght.png" alt="admir logo" />
        </div>
      </Link>
      <div className="onboarding-quote">
        <h1 className="quotation-mark">"</h1>
        <p className="quote">
          Great companies have high cultures of accountability, it comes with
          this culture of criticism I was talking about before, and I think our
          culture is strong on that.
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
      </div>
    </Onboarding>
  );
};

export default SideHero;
