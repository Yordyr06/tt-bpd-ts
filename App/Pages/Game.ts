import { Container } from "../Components/Container"
import { Icons } from "../Components/Icons"

interface Props {
  id: string,
  className: string[],
}

export const Game = ({ id, className }: Props): HTMLElement  => {
  const game = document.createElement('section')
  game.id = id
  className.forEach(el => game.classList.add(el))

  game.append(
    Container({
      elements: [
        Icons({
          className: ['icon', 'icon--backward'],
          action: function () {console.log('Hello World')}
        }),
  
        Icons({
          className: ['icon', 'icon--refresh'],
          action: function () {console.log('Hello World')}
        })
      ],

      className: ['container__row', 'container__row--icons']
    })
  )
  
  return game
}