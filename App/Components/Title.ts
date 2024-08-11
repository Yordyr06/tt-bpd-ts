interface Props {
  text: string,
  className: string[] | null
}

export const Title = ({ text, className }: Props): HTMLElement => {
  const h1 = document.createElement('h1')
  h1.classList.add('label', 'label__title')
  h1.innerText = text
  className?.forEach(el => h1.classList.add(el))
  return h1
}