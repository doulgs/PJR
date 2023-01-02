import styled from "styled-components/native";

export const ProductContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 120px;
  height: 96px;
  border-radius: 8px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors?.Gray[300]};
  margin: 24px 0px;
`;

export const AddToCartButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0px;
  right: 0px;
`;
