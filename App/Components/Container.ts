interface Props { 
  elements: HTMLElement[]
  className?: string[]
}

export const Container = ({ elements, className }: Props): HTMLDivElement => {
  const div = document.createElement('div')
  div.classList.add('container')
  elements.forEach(element => div.append(element))
  className?.forEach(element => div.classList.add(element))
  return div
}
