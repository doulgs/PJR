import styled from "styled-components/native";

export const Overlay = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: stretch;
  justify-content: center;
  background: ${({ theme }) => theme.colors?.Gray[600]};
  padding: 0 24px;
`;

export const ModalBody = styled.View`
  background: ${({ theme }) => theme.colors?.Foreground[50]};
  border-radius: 8px;
  padding: 24px;
  width: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.View`
  margin-top: 32px;
`;

export const Input = styled.TextInput`
  background: ${({ theme }) => theme.colors?.Foreground[100]};
  border: 1px solid ${({ theme }) => theme.colors?.Gray[300]};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
`;
