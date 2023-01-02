import styled from "styled-components/native";

export const Container = styled.View`
  margin: 24px 24px 0px;
`;

export const Content = styled.View``;

export const OrderHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Table = styled.View`
  padding: 16px;
  background: ${({ theme }) => theme.colors?.Foreground[100]};
  border: 1px solid ${({ theme }) => theme.colors?.Gray[300]};
  border-radius: 8px;
  margin-top: 24px;
`;
