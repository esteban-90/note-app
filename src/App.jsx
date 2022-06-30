import '@/style/main.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Header } from '@/components'
import { NoteContext, ThemeContext } from '@/contexts'
import { Container } from '@/layouts'
import { NoteDetail, NoteList } from '@/pages'

export default function App() {
  return (
    <Router>
      <ThemeContext>
        <Container>
          <Header />

          <NoteContext>
            <Routes>
              <Route path='/' element={<NoteList />} />

              <Route path='/:id' element={<NoteDetail />} />
            </Routes>
          </NoteContext>
        </Container>
      </ThemeContext>
    </Router>
  )
}
