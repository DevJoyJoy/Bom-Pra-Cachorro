# React + Vite

## Firebase local setup

1. Create or select a Firebase project and register a **Web app** in the Firebase console.
2. In **Authentication → Sign-in method**, enable **Email/Password**. This app signs in with the user's Firebase Auth email and password. Existing username login also works if a `usuarios` Firestore document has a matching `username` and `email`.
3. Create a Firestore database. The app reads and writes the `pets` collection; login by username additionally reads `usuarios`.
4. If `.env.local` does not exist, copy `.env.example` to it; otherwise preserve its existing values. Fill in the web app config values from **Project settings → Your apps**. Configure `VITE_FIREBASE_STORAGE_BUCKET` if you want to upload pet photos. The app can create pet records without photos when no bucket is configured.
5. Restart the Vite dev server after changing environment variables. Open `/Login`, sign in with the test account, and the app will take you to `/Register` to add a pet.

### Create the `useradmin` test login

The local `.env.local` already has `TEST_ADMIN_PASSWORD` set to the requested test password. Fill in its Firebase web app settings from **Project settings → Your apps**, then run `npm run create:test-admin` from the `Front-end` folder. The script creates the Firebase Auth account and its `usuarios/{uid}` username mapping; it can also repair the mapping if the account already exists and the password matches. Log in using username `useradmin` and that password. The script does not use a service-account key and does not grant Firebase admin privileges; do not use it to create a production admin account.

The Firebase web config is public client configuration, not an admin credential. Keep access safe with Firebase Security Rules: allow public reads of available pets if needed, require an authenticated user to create pet records, and restrict updates/deletes and Storage uploads to authorized users. Never publish service-account keys in this frontend.

If the form reports `permission-denied`, review the Firestore/Storage rules in the Firebase console. If it reports missing config, check `.env.local` values and restart Vite.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
