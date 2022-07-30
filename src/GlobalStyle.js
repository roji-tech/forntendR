import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
  --bg-white:	 aliceblue;
  --bg-light:	 #99ff99;
  --bg-image: url(./imgs/subtle-prism.svg);
  --bg-dark: 	#001630;

  --color-1: rgba(0, 239, 139, 0.456);
  --color-2: rgba(0, 0, 0, 0.256);

  --fontMed: 1.3rem;
  --fontSmall: 1.1rem;
  --fontSuperSmall: .8rem;
  }

  * {
  padding: 0;
  border: 0;
  margin: 0;
  box-sizing: border-box;
  }

  html {
    width: 100%;
  }

  body {
    border : 10px solid blue;
    width: 100%;
    margin: 0 auto;
    padding: 2% 1% 10%;
    background-color: var(--bg-white);
    color: var(--bg-light);
    display: flex;
    justify-content: center;



    .head{
      font-size: 2rem;
      padding: 20px;
      color: var(--bg-light)
    }
    
    h1 {
      font-size: 2rem;
    }

    .h3 {
      font-size: 1.5rem;
      font-family: cursive, "Poppins";
      color: blue;
      font-style: italic;
    }

    p {
      font-size: 1rem;
    }

    .App {
    text-align: center;
      }

  }
`;

export default GlobalStyle;
