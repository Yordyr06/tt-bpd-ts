interface Props {
  className: string[],
  action: Function
}

export const Icons = ({ className, action }: Props): HTMLElement => {
  const anchor = document.createElement('a')
  className?.forEach(el => anchor.classList.add(el))
  anchor.addEventListener('click', () => {
    action()
  })
  return anchor
} 