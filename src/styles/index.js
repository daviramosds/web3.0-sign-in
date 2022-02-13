import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .methods {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 50px;

    .metamask {
      background-color: ${(props) => props.theme.colors.metamask};
    }

    .walletconnect {
      background-color: ${(props) => props.theme.colors.walletconnect};
    }

    .coinbase {
      background-color: ${(props) => props.theme.colors.coinbase};
    }
  }

  .disconnect {
    background-color: #333;
  }

  .info {
    color: #333;

    b {
      color: #2b6cb0;
    }
  }
`;

export const Button = styled.button`
  padding: 12px 0;
  width: 250px;
  margin: 10px 0;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 3px;

  cursor: pointer;

  transition: 0.2s;

  :hover {
    opacity: 0.8;
  }
`;
