import { useEffect, useState } from 'react'
import uniqid from 'uniqid'

export default function useNotes() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('note-app')) ?? []
  )

  useEffect(() => {
    localStorage.setItem('note-app', JSON.stringify(notes))
  }, [notes])

  const getOne = (id) => {
    const note = notes.find((note) => note.id === id) ?? { content: '' }
    return note
  }

  const add = (content) => {
    const newNotes = notes.concat({
      id: uniqid(),
      content,
      date: new Date().toLocaleString(),
    })

    setNotes(newNotes)
  }

  const edit = (id, content) => {
    const newNotes = notes.map((note) =>
      note.id === id ? { ...note, content } : note
    )

    setNotes(newNotes)
  }

  const remove = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return { notes, getOne, add, edit, remove }
}
