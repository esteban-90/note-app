export default async function services({ id, method = 'GET', note }) {
  let baseURL = 'http://localhost:5000/notes'
  let newNote = null

  if (id) baseURL += `/${id}`

  if (method === 'PUT') {
    newNote = JSON.stringify({
      ...note,
      updated: new Date().toLocaleString(),
    })
  }

  if (method === 'POST') {
    newNote = JSON.stringify({
      ...note,
      created: new Date().toLocaleString(),
      updated: new Date().toLocaleString(),
    })
  }

  try {
    const response = await fetch(baseURL, {
      body: newNote,
      headers: { 'Content-Type': 'application/json' },
      method,
    })

    const data = await response.json()

    data.content ??= ''
    data.created ??= ''
    data.updated ??= ''

    return data
  } catch (exception) {
    console.error(exception)
  }
}
