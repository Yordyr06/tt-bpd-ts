interface Props { elements: HTMLElement[] }

export const Container = ({ elements }: Props): HTMLDivElement => {
  const div = document.createElement('div')
  div.classList.add('container')
  elements.forEach(element => div.append(element))
  return div
}
