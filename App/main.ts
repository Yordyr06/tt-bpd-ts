import { Home } from "./Pages/Home";
import { Form } from "./Pages/Form";
import { Game } from "./Pages/Game";

export const App = (): void => {
  const app = document.getElementById('app');

    app?.append(
      // Home({
      //   id: 'home',
      //   className: ['page', 'container']
      // }),
      
      // Form({
      //   id: 'form',
      //   className: ['page', 'container']
      // }),

      Game({
        id: 'game',
        className: ['page', 'container']
      })
    );
};

App()