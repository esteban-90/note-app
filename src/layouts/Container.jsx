import { useContext } from 'react'
import { arrayOf, element } from 'prop-types'
import { themeContext } from '@/contexts'

export default function Container({ children }) {
  const { theme } = useContext(themeContext)

  return (
    <div className={`container ${theme}`}>
      <div className='app'>{children}</div>
    </div>
  )
}

Container.propTypes = {
  children: arrayOf(element).isRequired,
}
