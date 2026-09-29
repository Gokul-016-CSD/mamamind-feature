# MamaMind feature pack

This pack extends the existing Expo Router + TypeScript `app/` structure shown in the screenshot. It deliberately avoids a large refactor.

## What is included
- Warm MamaMind design tokens and web CSS variables.
- Nunito font loading.
- Welcome, login, signup, onboarding, role selection.
- Mother dashboard with mood check-in, daily quote and journey game.
- Breathe, sleep/rest, journal, daily-care, Happy Jar, community, care-partner, support and settings screens.
- FloatingWorld, CursorTrail, TapBurst and BreatheOrb animation components.
- AsyncStorage progress and content persistence.
- Supabase authentication when `EXPO_PUBLIC_SUPABASE_URL` and `EXPO_PUBLIC_SUPABASE_ANON_KEY` exist; local demo auth fallback when they do not.
- Basic tests for mood logic, milestones and quote selection.

## Install
```bash
npx expo install expo-haptics expo-font @expo-google-fonts/nunito react-native-svg @react-native-async-storage/async-storage expo-splash-screen
npx expo install react-native-reanimated react-native-gesture-handler
npm install @supabase/supabase-js
```

If any package is already installed, keep the existing version unless Expo reports a compatibility mismatch.

## Environment
Copy `.env.example` to `.env` and add your Supabase project URL and anon key. Never put service-role keys in the app.

## Supabase setup
Enable Email/Password authentication in Supabase. If email confirmation is enabled, new users may need to verify their email before they can sign in. Google sign-in needs Google OAuth configured in Supabase before wiring the button to the provider.

## Existing vs added routes
Existing routes from the screenshot are preserved. Three additional routes are added because the brief explicitly requires them: `/breathe`, `/sleep`, and `/settings`.

## Important inspection note
The screenshot exposes the `app/` route tree, but not the actual `package.json`, `_layout.tsx`, existing components, or current dependency versions. Therefore this pack is a drop-in implementation based on the known Expo Router + TypeScript structure, not a claim that the unseen files were fully inspected. Merge the files into the real project and run `npx expo start -c`.
