import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
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

  body {
    // width: 100vw;
    margin: 0;
    padding: 0;
    background-color: var(--bg-dark);
    color: var(--bg-light);
    overflow-x : hidden;
    padding: 0 auto;
    text-align: center;
    display:flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-direction: column;

    .head{
      font-size: 2rem;
      padding: 20px;
      color: var(--bg-light)
    }
    
    h1 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.1rem;
    }

    p {
      font-size: 1rem;
    }

  }
`;

export default GlobalStyle;
