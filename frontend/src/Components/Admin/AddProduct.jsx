import React from 'react'

const AddProduct = ({ onClose }) => {
  return (
    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black h-64 w-96 rounded-lg z-10'>
      <div className="text-white text-xl text-center py-4">
        Add Product Form
      </div>
      <button onClick={onClose} className="absolute top-4 right-4 text-white">
        Close
      </button>
    </div>
  )
}

export default AddProduct