import { Layout } from './Layout.ts'
import { Title } from './Components/Title.ts';

export const App = (): void => {
  const appContainer = document.getElementById('app');

  if (appContainer) {
    appContainer.appendChild(
      Title({
        'text': 'Tic Tac Toe',
        'className': null
      }),

      
    );
  };
};

App()