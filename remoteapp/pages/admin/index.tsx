import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation';

const AdminPage = () => {
    const router = useRouter();
    const handleNavigation = (path: string) => {
        router.push(path)
    }
  return (
    <div>
      <h1>This is the admin page</h1>
      <button onClick={() => handleNavigation('/admin/user-management/user-summary')}>Go to user summary Page</button>
      
    </div>
  )
}

export default AdminPage
