import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import AdminPanel from './AdminPanel'

const Admin = () => {
    const [sidebarItem, setSidebarItem] = useState(1);

    const fetchData = async () => {
        const data = await axios.get("http://localhost:5000/items/")
        console.log(data.data)
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className='h-[87vh] font-Poppins flex justify-start'>
            <AdminSidebar sidebarItem={sidebarItem} setSidebarItem={setSidebarItem} />
            <AdminPanel sidebarItem={sidebarItem} />
        </div>
    )
}

export default Admin