import styled from "styled-components";

export const Container = styled.button`
  background: var(--primary);
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 340px;
  font-weight: 500;
  margin-top: 16px;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
`;
