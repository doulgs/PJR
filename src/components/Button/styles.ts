import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background: ${({ theme, disabled }) =>
    disabled ? "#999" : theme.colors?.Red};
  border-radius: 48px;
  padding: 14px 24px;
  align-items: center;
  justify-content: center;
`;
