import { baseUrl } from 'libs/notes-service'

export default async function Page() {
  const res = await fetch(`${baseUrl}/notes`, {
    cache: 'force-cache',
    next: { revalidate: 60 }
  })
  const notes = await res.json()
  return (
    <div className="note--empty-state">
      <span className="note-text--empty-state">
        <h2 className="note-title">Amount of notes: {notes.length}</h2>
      </span>
    </div>
  )
}
