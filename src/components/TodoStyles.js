import styled from "styled-components";

export const TodoStyle = styled.section`
  width: 55vw;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 10px;
  padding-bottom: 0;
  justify-content: center;
  text-align: center;
  /* background: var(--blue); */

  h1 {
    margin: 5px;
    color: var(--blue);
  }

  .items {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }

  footer {
    padding: 10px 5px 20px;
    background-color: var(--bg-dark);
    margin: 10px -11px -11px -11px;
    color: var(--blue);
  }

  @media screen and (max-width: 1200px) {
    width: 60vw;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const TodoFormStyle = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  background-color: var(--light);
  padding: 15px 0;

  h3 {
    /* margin: 5px; */
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
    align-items: center;

    @media screen and (max-width: 500px) {
      display: flex;
      flex-direction: column;
    }

    .inputs {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.7em;
      width: 95%;

      input {
        border-radius: 20px;
        padding: 10px;
        width: 100%;
        outline: none;
        resize: none;
      }
    }

    .buttons {
      width: 90%;
      display: flex;
      justify-content: space-evenly;
      padding-right: 10px;

      @media screen and (max-width: 500px) {
      }

      button {
        padding: 6px;
        border-radius: 10px;
        width: 25%;

        @media screen and (max-width: 500px) {
          width: 40%;
          padding: 8px;
        }
      }
    }
  }

  //   @media screen and (max-width: 1024px) {
  //     width: 70%;
  //   }
  //   @media screen and (max-width: 800px) {
  //     width: 80%;
  //   }
  //   @media screen and (max-width: 500px) {
  //     width: 98%;
  //   }
`;

export const TodoListStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: transparent;
  background-color: inherit;

  .todoCount {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: var(--brown);
    font-style: italic;
    font-weight: 1000;

    p {
      font-size: var(--fontMed);
    }

    .p1 {
      font-size: var(--fontMed);
      background: var(--bg-dark);
      padding: 10px;
      border-radius: 30px;
    }
  }

  .topBar {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    /* @media screen and (max-width: 500px) {
      align-items: flex-start;
      justify-content: end;
      flex-direction: column-reverse;
    } */

    div {
      display: flex;
      align-items: flex-end;
      gap: 0.5em;

      .del_multiple_btn {
        box-sizing: border-box;
        cursor: pointer;
        font-weight: 700;
        border-bottom: 1px double transparent;

        :hover {
          color: var(--bg-white);
          border-bottom: 1px dotted var(--bg-white);
          background-color: var(--brown);
        }
      }

      @media screen and (max-width: 500px) {
        align-items: flex-start;
        flex-direction: column;
        gap: 0;
      }

      button {
        padding: 10px;
      }
    }

    select {
      align-self: center;
      justify-self: flex-end;
      /* appearance: none;
      -webkit-appearance: none; */
      margin-right: 10px;
      outline: none;
      padding: 5px;
      font-weight: 1000;
      font-size: 0.9em;
      border-radius: 10px;
      -webkit-padding-end: 20px;
      -moz-padding-end: 20px;
      -webkit-padding-start: 2px;
      -moz-padding-start: 2px;

      select::-ms-expand {
        /* display: none; Hide the default arrow in Internet Explorer 10 and Internet Explorer 11 */
      }
    }
  }

  ul {
    list-style: none;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    li {
      display: grid;
      grid-template-columns: 10fr 2fr;
      align-items: center;
      box-sizing: border-box;
      border-left: 10px solid transparent;
      border-left-style: solid;
      background-color: var(--light);
      color: black;

      .todo {
        display: flex;
        gap: 0.4em;
        padding: 15px 10px 15px 0;
        flex-direction: column;

        .p1 {
          text-align: justify;
          word-wrap: break-word;

          .index {
            padding: 7px;
            text-align: center;
            margin-right: 1%;
            background-color: var(--brown);
            border-radius: 50%;
            color: white;
          }
        }

        .timestamp {
          padding: 7px 0 0;
          margin-top: 5px;
          border-top: 2px solid var(--bg-white);
        }

        @media screen and (max-width: 600px) {
          text-align: justify;
        }

        li.completed_todo {
          border-top-left-radius: 30px;
          border-left-color: #0000ff;
          background-color: rgb(0, 255, 255);
        }

        .desc {
          text-align: justify;
          border-left: 1px solid blue;
          padding-left: 10px;
        }
      }

      .iconDiv {
        display: flex;
        gap: 0.4em;
        justify-content: space-around;

        .icon {
          cursor: pointer;
        }
      }
    }
  }

  //   @media screen and (max-width: 1024px) {
  //     width: 70%;
  //   }
  //   @media screen and (max-width: 800px) {
  //     width: 80%;
  //   }
  //   @media screen and (max-width: 500px) {
  //     width: 98%;
  //   }
`;
