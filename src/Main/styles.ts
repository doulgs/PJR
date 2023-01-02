import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : "0px"};
  background: ${({ theme }) => theme.colors?.Foreground[50]};
`;

export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 34px;
`;

export const ManuContainer = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  min-height: 110px;
  background: ${({ theme }) => theme.colors?.Foreground[100]};
  padding: 24px 24px;
`;

export const FooterContainer = styled.View``;
