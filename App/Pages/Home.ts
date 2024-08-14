import { Title } from "../Components/Title"
import { Button } from "../Components/Button"

interface Props {
  id: string,
  className: string[],
}

export const Home = ({id, className}: Props): HTMLElement => {
  const home = document.createElement('section')
  home.id = id
  className.forEach(el => home.classList.add(el))

  home.append(
    Title({
      text: 'Tic Tac Toe',
      className: ['label', 'label__title']
    }),

    Button({
      text: 'JUGADOR VS CPU',
      className: ['label', 'button', 'button__primary'],
      action: function () {console.log('Hello World')}
    }),

    Button({
      text: 'JUGADOR VS JUGADOR',
      className: ['label', 'button', 'button__secondary'],
      action: function () {console.log('Hello World')}
    })
  )

  return home
}