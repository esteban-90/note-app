import { useContext, useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { ChevronLeft } from '@/assets'
import { noteContext } from '@/contexts'

export default function NoteDetail() {
  const { id } = useParams()
  const isNew = id === 'new'

  const navigate = useNavigate()
  const noteRef = useRef('')

  const { getOne, add, edit, remove } = useContext(noteContext)
  const { content } = getOne(id)

  const createNote = () => {
    if (noteRef.current.value.trim()) {
      add(noteRef.current.value)
      navigate('/')
    }
  }

  const updateNote = () => {
    edit(id, noteRef.current.value)
    navigate('/')
  }

  const deleteNote = () => {
    remove(id)
    navigate('/')
  }

  const goBack = () => {
    if (isNew) {
      createNote()
    } else {
      if (noteRef.current.value.trim()) updateNote()
      else deleteNote()
    }
  }

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to='/' title='Back to notes'>
            <ChevronLeft onClick={goBack} title='Back to notes' />
          </Link>
        </h3>

        <button onClick={isNew ? createNote : deleteNote}>
          {isNew ? 'Done' : 'Delete'}
        </button>
      </div>

      <textarea defaultValue={content} ref={noteRef} autoFocus />
    </div>
  )
}
