import React from "react";
import Head from "next/head";
import HomeLayout from "../src/containers/Layouts/HomeLayout";
import { AuthContext } from "../src/context/auth-context";
import { useRouter } from "next/router";
import { routes } from "../src/routes";
const { login: SignIn } = routes;

export default function HomePage() {
  const authContext = React.useContext(AuthContext);
  const router = useRouter();

  return (
    <React.Fragment>
      <Head>
        <title>Admir Technologies</title>
      </Head>
      {/* checks if the user is authenticated. In simpler terms, we check is there's a token 
      present in localStorage. If it's there, we route the user to the dashboard and vice versa   */}
      {authContext.isUserAuthenticated() ? (
        router.push("/dashboard")
      ) : (
        <HomeLayout>
          <SignIn />
        </HomeLayout>
      )}
    </React.Fragment>
  );
}
