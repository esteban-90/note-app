import { Link } from 'react-router-dom'
import { string } from 'prop-types'
import { getBody, getTitle } from '@/utils'

export default function NoteItem({ id, content, date }) {
  return (
    <Link to={`/${id}`}>
      <div className='notes-list-item'>
        <h3>{getTitle(content)}</h3>

        <p>
          <span style={{ color: 'var(--color-dark)' }}>{date}</span>
          {getBody(content)}
        </p>
      </div>
    </Link>
  )
}

NoteItem.propTypes = {
  id: string.isRequired,
  content: string.isRequired,
  date: string.isRequired,
}
