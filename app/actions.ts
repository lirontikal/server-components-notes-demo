'use server'

import { getUser, userCookieKey } from 'libs/session'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import * as notesService from "../libs/notes-service";

export async function saveNote(
  noteId: string | null,
  title: string,
  body: string
) {
  const cookieStore = cookies()
  const userCookie = cookieStore.get(userCookieKey)
  const user = getUser(userCookie?.value)

  const payload = {
    title: title.slice(0, 255),
    updated_at: Date.now(),
    body: body.slice(0, 2048),
    created_by: user
  }

  if (noteId) {
    await notesService.saveNote({ id: noteId, ...payload});
  } else {
    noteId = Date.now().toString()
    await notesService.createNote({ id: noteId, ...payload });
  }

  revalidatePath(`/note/${noteId}`)
  redirect(`/note/${noteId}`)
}

export async function deleteNote(noteId: string) {
  await await notesService.deleteNote(noteId);
  revalidatePath('/')
  redirect('/')
}
