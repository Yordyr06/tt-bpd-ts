interface Props {
  number: number,
  className: string[],
  action: (value: string) => void
}

export const Label = ({ number, className, action }: Props): HTMLInputElement => {
  const input = document.createElement('input')
  input.placeholder = `Jugador ${number}`
  className.forEach(el => input.classList.add(el))

  input.addEventListener('change', () => {
    action(input.value)
  })

  return input
}