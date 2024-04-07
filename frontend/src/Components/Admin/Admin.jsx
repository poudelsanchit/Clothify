import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import AdminPanel from './AdminPanel'

const Admin = () => {
    const [sidebarItem, setSidebarItem] = useState(1);
    const [allProducts, setAllProducts] = useState([]);

    const fetchData = async () => {
        const response = await axios.get("http://localhost:5000/items/")
        setAllProducts(response.data);
        // console.log(response.data)
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className='min-h-[87vh] font-Poppins flex justify-start'>
            <AdminSidebar sidebarItem={sidebarItem} setSidebarItem={setSidebarItem} />
            <AdminPanel sidebarItem={sidebarItem} allProducts={allProducts} />
        </div>
    )
}

export default Admin