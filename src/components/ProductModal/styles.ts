import styled from "styled-components/native";

export const Image = styled.ImageBackground`
  width: 100%;
  height: 200px;
  align-items: flex-end;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.colors?.Gray[400]};
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  margin: 24px;
`;

export const ModalBody = styled.View`
  background: ${({ theme }) => theme.colors?.Foreground[50]};
  flex: 1;
  padding: 32px 24px 0px;
`;

export const Header = styled.View``;

export const IngredientsContainer = styled.View`
  flex: 1;
  margin-top: 32px;
`;

export const Ingredient = styled.View`
  border: 1px solid ${({ theme }) => theme.colors?.Gray[300]};
  flex-direction: row;
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 4px;
`;

export const Footer = styled.View`
  min-height: 110px;
  background: ${({ theme }) => theme.colors?.Foreground[100]};
  padding: 24px 24px;
`;

export const FooterContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PriceContainer = styled.View``;
