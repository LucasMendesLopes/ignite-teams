import { Animated, StatusBar, StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as NavigationBar from "expo-navigation-bar";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"

import { ToastBase } from '@components';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes';
import theme from '@theme';
import { useCallback, useRef } from 'react';


SplashScreen.preventAutoHideAsync();

NavigationBar.setBackgroundColorAsync(theme.COLORS.GRAY_600);
NavigationBar.setButtonStyleAsync("dark");

export default function App() {
  const [fontsLoaded, error] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  const fadeAnim = useRef(new Animated.Value(1)).current;

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || error) {
      await SplashScreen.hideAsync();

      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <View
        style={styles.container}
        onLayout={onLayoutRootView}
      >
        <StatusBar
          backgroundColor={theme.COLORS.GRAY_600}
          barStyle="light-content"
        />

        <Animated.View style={[styles.splashContainer, { opacity: fadeAnim }]} />

        <ToastBase>
          <Routes />
        </ToastBase>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_600,
  },
  splashContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.COLORS.GRAY_600,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

