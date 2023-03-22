const stickyHeader = (ref) => {
  const value = window.scrollY
  if (value > 100) return ref.current.classList.add('sticky')
  return ref.current.classList.remove('sticky')
}

const configureHeader = (ref) => {
  const elements = ref.current.querySelectorAll('.has-droupdown > a')

  window.addEventListener('scroll', stickyHeader.bind(null, ref))

  elements.forEach((element) => {
    element.addEventListener('click', () => {
      const submenu = element.parentElement.querySelector('.submenu')
      if (submenu !== null) {
        submenu.classList.toggle('active')
      }
    })
  })
}

const cleanUpHeader = (ref) => {
  window.removeEventListener('scroll', stickyHeader.bind(null, ref))
  const elements = ref.current.querySelectorAll('.has-droupdown > a')
  elements.forEach((element) => {
    element.removeEventListener('click', () => {
      const submenu = element.parentElement.querySelector('.submenu')
      if (submenu !== null) {
        submenu.classList.toggle('active')
      }
    })
  })
}

export { configureHeader, cleanUpHeader }
export default stickyHeader
