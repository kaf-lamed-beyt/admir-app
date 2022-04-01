import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styled from "styled-components";

const H1 = styled.h1`
  text-align: center;
  padding: 280px 130px;

  span {
    color: var(--primary);
  }

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    padding: 260px 5px;
    font-size: 18px;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    padding: 260px 80px;
    font-size: 18px;
  }
`;

export default function VerifiedPage() {
  const { query } = useRouter();

  const email = query.email;

  return (
    <React.Fragment>
      <Head>
        <title>Verify Account | Admir Technologies</title>
      </Head>
      <H1>
        Congratulations your account, with email address: <span>{email}</span>{" "}
        has been verified!
      </H1>
    </React.Fragment>
  );
}
