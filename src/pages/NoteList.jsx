import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { Add, Moon, Sun } from '@/assets'
import { NoteItem } from '@/components'
import { noteContext, themeContext } from '@/contexts'

export default function NoteList() {
  const { notes } = useContext(noteContext)
  const { theme, change } = useContext(themeContext)

  return (
    <div className='notes'>
      <div className='notes-header'>
        <h2 className='notes-title'>&#9782;&nbsp;My notes</h2>
        <p className='notes-count'>{notes.length}</p>
      </div>

      <div className='notes-list'>
        {notes.map((note) => (
          <NoteItem key={note.id} {...note} />
        ))}
      </div>

      <button
        className='floating-button-theme'
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'}`}
        onClick={change}
      >
        {theme === 'dark' ? (
          <Sun title='Switch to light' />
        ) : (
          <Moon title='Switch to dark' />
        )}
      </button>

      <Link to='/new' className='floating-button-add' title='Add new note'>
        <Add title='Add new note' />
      </Link>
    </div>
  )
}
