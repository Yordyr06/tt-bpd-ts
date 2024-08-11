import { Title } from "../Components/Title"
import { Button } from "../Components/Button"
import { Container } from "../Components/Container"

export const Home = (): HTMLElement => {
  const home = document.createElement('section')
  home.id = 'home'
  home.classList.add('page', 'container')

  if (home) {
    home.append(
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
    )
  }

  return home
}