import React from 'react'
import { useRouter } from 'next/navigation'

const UserSummary = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path)
  }
  return (
    <div>
      <p></p>
      <h1> This is the user summary page</h1>
      <button onClick={() => handleNavigation("/")}>Go back home</button>
    </div>
  )
}

export default UserSummary
