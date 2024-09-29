import React from 'react'
import { useRouter } from 'next/navigation'

const UserManagement = () => {
    const router = useRouter();
    const handleNavigation = (path: string) => {
        router.push(path)
    }
  return (
    <div>
      <h1>This is the user management Page</h1>
      <button onClick={() => handleNavigation('/admin/user-management/user-summary')}>Go to user summary Page</button>
    </div>
  )
}

export default UserManagement
