import { SuccessContainer, ImageContainer } from "@/styles/pages/success";
import Link from "next/link";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer></ImageContainer>

      <p>
        Uhuul <strong>Diego Fernandes</strong>, sua{" "}
        <strong>Camiseta Beyond</strong> the Limits já está a caminho da sua
        casa.
      </p>

      <Link href="/">
        Voltar ao catalogo
      </Link>
    </SuccessContainer>
  );
}