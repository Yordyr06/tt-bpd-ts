interface Props{
  text: string,
  className: string[] | null,
  action: Function
}

export const Button = ({text, className, action}: Props): HTMLButtonElement => {
  const button = document.createElement('button')
  const p = document.createElement('p')

  className?.forEach(el => {
    el.includes('label') 
      ? p.classList.add(el) 
      : button.classList.add(el)
  })

  p.innerText = text
  button.appendChild(p)

  button.addEventListener('click', () => {
    action() 
  })
  
  return button
} 