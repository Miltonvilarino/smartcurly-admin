import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(#eba9ef, #fddeec);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-content: center;
  width: 100%;
  max-width: 700px;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  } to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromRight} 1s;

  > img {
    width: 200px;
    height: 100px;
  }

  form {
    width: 340px;
    h1 {
      font-size: 3rem;
      text-align: center;
      font-family: "Inter", "Roboto", sans-serif;
      margin-bottom: 24px;
      color: var(--gray-600);
    }

    a {
      color: #232129;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
      }
    }
  }
  > a {
    color: var(--primary);
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    svg {
      margin-right: 16px;
    }
    &:hover {
    }
  }
`;
