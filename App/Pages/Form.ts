import { Title } from "../Components/Title"
import { Label } from "../Components/Label"
import { Button } from "../Components/Button"


interface Props {
  id: string,
  className: string[],
}

export const Form = ({ id, className }: Props): HTMLElement => {
  const form = document.createElement('form') as HTMLFormElement
  form.id = id
  className.forEach(el => form.classList.add(el))
  form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
  })

  const handleChange = (value: string) => {
    console.log(`This is the value: ${value}`)
  }

  const test: number = 2
  
  switch (test) {
    case 2: 
      form.append(
        Title({
          text: 'Nombrar Jugadores',
          className: ['label', 'label__sub']
        }),
    
        Label({
          number: 1,
          className: ['input'],
          action: handleChange
        }),
    
        Label({
          number: 2,
          className: ['input'],
          action: handleChange
        }),
    
        Button({
          text: 'INICIAR',
          className: ['label', 'button', 'button__secondary'],
          action: function () {console.log('Hello World')}
        })
      );
      break

    case 1:
      form.append(
        Title({
          text: 'Nombrar Jugadores',
          className: ['label', 'label__sub']
        }),
    
        Label({
          number: 1,
          className: ['input'],
          action: handleChange
        }),
    
        Button({
          text: 'INICIAR',
          className: ['label', 'button', 'button__secondary'],
          action: function () {console.log('Hello World')}
        })
      )
      break
  }

  return form
}