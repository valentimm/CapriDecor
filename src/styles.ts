import styled from "styled-components";

export const Header = styled.header`
    #headerBanner {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem 0;
        //border-bottom: 1px solid #eaeaea;

        img {
            width: auto;
            height: auto;
        }
    }

  @media (max-width: 768px) {

    #headerBanner {
    padding-top: 2rem;
      img {
        width: 50%;
        height: 50%;
      }
    }
  }
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    text-align: center;
    border: 1px solid red;

    h2 {
        margin-top: 0;
        line-height: 1.15;
        font-size: 1.25rem;
        font-weight: 200;
        color: white;
        border-bottom: 1px solid #ffffff;
    }

    #mainForm {
        width: 80%;
        margin: auto;
        border: 1px solid green;
    }


    #internalControl {
        padding: 1rem;
        display: flex;
        flex-direction: column;
    }

    #internalControl div {
        margin-bottom: 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #internalControl label {
        margin-right: 0.5rem;
        color: white;
    }


    #internalControl input, select, textarea {
        width: 100%;
        padding: 0.5rem;
        box-sizing: border-box;
    }

    #internalControl .checkbox {
        display: flex;
        max-width: 600px;
        justify-content: space-between;
        align-items: center;
    }

    //----------------------Client Info-----------------------//

    #clientInfo {
        padding: 1rem;
        display: flex;
        flex-direction: column;
    }

    #clientInfo div {
        margin-bottom: 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #clientInfo label {
        margin-right: 0.5rem;
        color: white;
    }

    #clientInfo input, select, textarea {
        width: 100%;
        padding: 0.5rem;
        box-sizing: border-box;
    }

    #clientInfo input[type="number"] {
        width: 100%;
        padding: 0.5rem;
        box-sizing: border-box;
    }

    //----------------------Ambient-----------------------//

    #ambient {
        padding: 1rem;
        display: flex;
        flex-direction: column;
    }

    #ambient div {
        margin-bottom: 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #ambient label {
        margin-right: 0;
        color: white;
        padding: 0 0.5rem;
    }

    #ambient input, select, textarea {
        width: 100%;
        padding: 0.5rem;
        box-sizing: border-box;
    }


`;

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
    background-color: #f9f9f9;
    color: #333;

    p {
        font-size: 0.8rem;
    }
`;
