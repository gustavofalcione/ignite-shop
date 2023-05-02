# Ignite Shop 

# Sobre o projeto

O ignite shop é uma aplicação frontend feita em Next.Js, de um pequeno e-commerce. Na página inicial, são listadas em forma de carrossel camisetas disponíveis para compra, ao clicar em uma das opções o usuário é redirecionado a página específica do produto que o mostra seu nome, a descrição, o preço e um botão "comprar" que o levará para uma página de pagamento da plataforma Stripe. Caso a compra seja efetuada, o usuário é redirecionado para uma rota de sucesso que trará o nome do comprador junto a imagem e nome do produto comprado.

# Objetivo

O projeto teve como principal objetivo colocar em prática o uso dos métodos de renderização pelo lado do servidor, que são o cor do Next (SSR e SSG).
Além disso pude conhecer uma nova ferramente de estilização css in js chamada Stitches com um porpósito semelhante ao famoso Styled-Components, com algumas diferenças; a integração com a plataforma de pagamentos Stripe e sua API, e por fim a biblioteca de slides keen slider.

## Layout
![Web 1](https://github.com/gustavofalcione/ignite-shop/blob/main/assets/home-ignite-shop.png)

![Web 2](https://github.com/gustavofalcione/ignite-shop/blob/main/assets/product-page.png)

![Web 3](https://github.com/gustavofalcione/ignite-shop/blob/main/assets/stripe-plataform.png)

![Web 4](https://github.com/gustavofalcione/ignite-shop/blob/main/assets/success-page.png)

# Tecnologias utilizadas

## Front-end
- NextJS
- Stitches 
- Stripe 

# Como executar o projeto

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/gustavofalcione/ignite-shop.git

cd ignite-shop

# instalar dependências
yarn install / npm install

# executar o projeto
yarn dev / npm run dev
```
# Autor

Gustavo Falcione Cagnato

<div> 
  <a href="mailto:falcionegustavo@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/gustavo-falcione-cagnato" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
</div>
