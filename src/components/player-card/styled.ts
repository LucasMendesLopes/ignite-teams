import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  height: 54px;
  flex-direction: row;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  align-items: center;
  padding: 15px;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))``;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}

  margin-left: 4px;
  margin-right: auto;
`;
