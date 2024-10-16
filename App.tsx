import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"

import theme from './src/theme';

import { Groups, Players } from '@screens';
import { Loading } from '@components';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor={theme.COLORS.GRAY_600}
        barStyle="light-content"
      />

      {fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  );
}
