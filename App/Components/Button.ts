interface Props{
  text: string,
  className: string[] | null,
  callFunction?: Function
}

export const Button = ({text, className, callFunction}: Props): HTMLButtonElement => {
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
    if (callFunction) callFunction() 
  })
  
  return button
} 