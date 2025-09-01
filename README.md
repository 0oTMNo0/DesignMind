# Design Mind

**DesignMind** is an AI-powered UI/UX evaluation app developed as part of Bournemouth University work. Designed by **Tabanmehr Nabizadeh**, the app aims to help users efficiently evaluate and improve their design projects. Key technologies and libraries used include React Native, Expo, Reanimated, Skia, Redux Toolkit, React Navigation, AsyncStorage, Axios, TypeScript, and more (see `package.json` for full dependencies). Learn more about the author at [www.tabanmehr.com](http://www.tabanmehr.com).

DesignMind is a versatile mobile application designed to help users create, manage, and visualize design projects efficiently. It serves as a creative companion, providing tools and features to streamline the design workflow from concept to completion.

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  <!-- Web -->
</p>

## 🚀 How to use

```bash

# Once created, install dependencies by running:
yarn
# or
npm install

# To start the development server:
yarn start
# or
npm run start

# To run your project on a specific platform, use one of the following commands:
npm run android   # to run on Android device or emulator
npm run ios       # to run on iOS simulator (macOS only)
npm run web       # to run on web browser

# If you need to specify a custom host for the React Native packager, run:
REACT_NATIVE_PACKAGER_HOSTNAME=10.83.129.36 npx expo start
```

## 📱 Using the APK Directly

If you prefer not to install Expo CLI or Android Studio, you can install the provided APK files directly on your Android device.

There are two APK files located in the root directory:

- `build-1755874411726.apk`: An older version that requires Expo Go to run.
- `build-1755885515872.apk`: A newer standalone APK that runs without Expo Go.

### Manual APK Installation Steps:

1. **Enable installation from unknown sources**:

   - On Android 8.0+ (Oreo) and above, go to **Settings > Apps & notifications > Special app access > Install unknown apps**, then select your file browser or browser app and enable **Allow from this source**.
   - On older versions, go to **Settings > Security** and enable **Unknown sources**.

2. **Transfer the APK file to your device** via USB, email, or cloud storage.

3. **Locate the APK file** using a file manager on your device.

4. **Tap the APK file** to start the installation and follow the prompts.

### Notes on Device Variations:

- Devices running **HyperOS** or **MIUI** may have additional security prompts or settings to allow APK installations; please follow on-screen instructions accordingly.
- The newer APK (`build-1755885515872.apk`) works standalone and does not require the Expo Go app, making it easier to install and use directly.

## 📦 APK Info

You can build and install APKs for testing on Android devices. Use Expo's build service or EAS Build to generate APKs.

## ⚠️ Troubleshooting

- Ensure you have the latest versions of Expo CLI and dependencies.
- If you encounter issues with Reanimated, consult the official documentation.
- Clear caches by running `expo start -c` if you face unexpected errors.

## 📝 Notes

- [`react-native-reanimated` docs](https://docs.swmansion.com/react-native-reanimated/) provide detailed usage and API information.
