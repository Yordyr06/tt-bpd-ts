interface Props {
  text: string,
  className: string[] | null
}

export const Title = ({ text, className }: Props): HTMLElement => {
  const h1 = document.createElement('h1')
  const title = document.createElement('header')
  
  h1.classList.add('label', 'label__title')
  h1.innerText = text

  title.id = 'title'
  className?.forEach(el => title.classList.add(el))
  title.appendChild(h1)

  return title
}