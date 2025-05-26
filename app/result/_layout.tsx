import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* loading */}
      <Stack.Screen name="index" />
      <Stack.Screen name="details" />
      {/* main page  */}
      {/* <Stack.Screen name="index" /> */}
    </Stack>
  );
}
