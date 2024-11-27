//
// Основной файл разработки и запуска WEB приложения.
//

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

// импорт отдельных модулей - страниц
import { StatScreen } from "./src/pages/StatPage";
import { HomeScreen } from "./src/pages/HomePage";
import { AuthScreen } from "./src/pages/AuthPage";
import { GameScreen } from "./src/pages/GamePage";
import { GameScreen } from "./src/pages/GamePage";
import { ProfileScreen } from "./src/pages/ProfilePage";
import { GameoverScreen } from "./src/pages/GameOverPage";

// конфигуратор навигации
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ffffff",
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Auth" component={AuthScreen} />

        <Stack.Screen name="Game" component={GameScreen} />

        <Stack.Screen name="GameOver" component={GameoverScreen} />

        <Stack.Screen name="Stat" component={StatScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
