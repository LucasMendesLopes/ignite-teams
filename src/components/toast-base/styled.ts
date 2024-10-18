import { ToastProvider } from "react-native-toast-notifications";
import styled from "styled-components/native";

export const ToastContainer = styled(ToastProvider).attrs(({ theme }) => ({
  textStyle: {
    color: theme.COLORS.WHITE,
    fontSize: theme.FONT_SIZE.MD,
    flexWrap: "wrap",
    textAlign: "left",
    flex: 1,
  },
}))`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 20px;
`;
