import React from 'react'
import ProductPanel from './ProductPanel'
import OrderPanel from './OrderPanel'

const AdminPanel = ({ sidebarItem }) => {
    return (
        <div className=' w-10/12 flex p-8'>
            {
                sidebarItem === 1 ?
                    <ProductPanel /> : <OrderPanel />
            }
        </div>
    )
}

export default AdminPanel