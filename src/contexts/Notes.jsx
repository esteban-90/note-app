import { createContext } from 'react'
import { element } from 'prop-types'
import { useNotes } from '@/hooks'

export const noteContext = createContext()

export function NoteContext({ children }) {
  const noteActions = useNotes()
  const { Provider } = noteContext

  return <Provider value={noteActions}>{children}</Provider>
}

NoteContext.propTypes = {
  children: element.isRequired,
}
