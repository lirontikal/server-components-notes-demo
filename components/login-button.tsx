'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginButton() {
  const router = useRouter();
  
  const login = () => {
    router.push("/auth");
  }

  return (
    <button
      className="edit-button edit-button--solid"
      role="menuitem"
      onClick={login}
    >
      Login to Add
    </button>
  )
}
