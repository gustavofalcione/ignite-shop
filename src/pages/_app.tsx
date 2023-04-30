import Image from "next/image";
import { globalStyles } from "../styles/global";
import type { AppProps } from "next/app";

import logo from "../assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image
          src={logo}
          alt="logo"
          placeholder="blur"
          blurDataURL={"../assets/logo.svg"}
        />
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
