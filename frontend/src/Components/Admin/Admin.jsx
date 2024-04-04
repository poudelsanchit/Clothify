import axios from 'axios'
import React, { useEffect } from 'react'

const Admin = () => {
    const fetchData = async () => {
        const data = await axios.get("http://localhost:5000/api/items/")
        console.log(data.data);

    }


    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className='h-screen flex  justify-center'>
            <div className=' w-10/12 flex'>
                <div className='font-Poppins text-3xl'>
                    Admin Panel
                </div>
            </div>
        </div>
    )
}

export default Admin