import { Home } from "./Pages/Home";

export const App = (): void => {
  const app = document.getElementById('app');

  if (app) {
    app.append(
      Home()
    );
  };
};

App()