import { Layout } from './Layout.ts'
import { Title } from './Components/Title.ts';
import { Button } from './Components/Button.ts';

export const App = (): void => {
  const appContainer = document.getElementById('app');

  if (appContainer) {
    appContainer.append(
      Title({
        text: 'Tic Tac Toe',
        className: null
      }),

      Button({
        text: 'JUGADOR VS CPU',
        className: ['label', 'button', 'button__primary'],
        callFunction: function () {console.log('Hello World')}
      }),

      Button({
        text: 'JUGADOR VS JUGADOR',
        className: ['label', 'button', 'button__secondary'],
        callFunction: function () {console.log('Hello World')}
      })
    );
  };
};

App()