import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
  --bg-white:	 #c7dbec;
  --color:	 #fff;
  --light: #569fdf;
  --blue: #0066ff;
  --brown: #352f2f;

  --fontMed: 1.3rem;
  --fontSmall: 1.1rem;
  }

  * {
  padding: 0;
  border: 0;
  margin: 0;
  box-sizing: border-box;
  }

  :root {
    width: 99.8%;
  }

  body {
    /* border : 10px solid var(--blue); */
    width: 99.8%;
    margin: 0 auto;
    padding: 2% 1% 10%;
    background-color: var(--bg-white);
    color: var(--color);




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
      display: flex;
      width: 100%;
     justify-content: center;
     text-align: center;
      }

  }
`;

export default GlobalStyle;
