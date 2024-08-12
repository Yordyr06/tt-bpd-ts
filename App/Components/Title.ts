interface Props {
  text: string,
  className: string[]
}

export const Title = ({ text, className }: Props): HTMLElement => {
  const h1 = document.createElement('h1')
  h1.innerText = text
  className.forEach(el => h1.classList.add(el))
  return h1
}