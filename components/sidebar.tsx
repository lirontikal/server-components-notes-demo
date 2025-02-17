'use client'

import React, { Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import SearchField from 'components/search'
import NoteList from 'components/note-list'
import NoteListSkeleton from 'components/note-list-skeleton'

type Note = {
  id: string
  created_by: string
  title: string
  body: string
  updated_at: number
}

export default function Sidebar({
  children,
  notes
}: {
  children: React.ReactNode
  notes: Note[]
}) {
  const router = useRouter();

  const logout = () => {
    router.push("/logout");
    router.refresh();
  }
  
  return (
    <>
      <input type="checkbox" className="sidebar-toggle" id="sidebar-toggle" />
      <section className="col sidebar">
      <section className="sidebar-header">
        <Link href={'/'} className="link--unstyled react-notes-header">
            <img
              className="logo"
              src="/logo.svg"
              width="22px"
              height="20px"
              alt=""
              role="presentation"
            />
            <strong>React Notes</strong>
        </Link>
        <button className="logout-btn" onClick={logout}>
        logout
        </button>
        </section>
        <section className="sidebar-menu" role="menubar">
          <SearchField />
          {children}
        </section>
        <nav>
          <Notes notes={notes} />
        </nav>
      </section>
    </>
  )
}

function Notes({ notes }: { notes: Note[] }) {
  const searchParams = useSearchParams()
  const search = searchParams.get('q')

  return (
    <Suspense fallback={<NoteListSkeleton />}>
      <NoteList notes={notes} searchText={search} />
    </Suspense>
  )
}
