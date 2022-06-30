export const getTitle = (content) => {
  const [title] = content.split('\n')

  if (title.length > 45) return title.slice(0, 45)

  return title
}

export const getBody = (content) => {
  const title = getTitle(content)
  const body = content.replaceAll('\n', '').replaceAll(title, '')

  if (body.length > 40) return body.slice(0, 40) + '...'

  return body
}
