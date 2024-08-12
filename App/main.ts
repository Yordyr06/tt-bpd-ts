import { Home } from "./Pages/Home";
import { Form } from "./Pages/Form"

export const App = (): void => {
  const app = document.getElementById('app');

    app?.append(
      // Home({
      //   id: 'home',
      //   className: ['page', 'container']
      // }),
      Form({
        id: 'form',
        className: ['page', 'container']
      }),
    );
};

App()