import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useToast,Button } from "@chakra-ui/react";
import { IoIosClose } from "react-icons/io";
import axios from "axios";

const AddProduct = ({ onClose }) => {
  const toast = useToast()

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [category, setCategory] = useState("Mens");
  const [gender, setGender] = useState("Male");
  const [price, setPrice] = useState("");
  const [imageUrls, setImageUrls] = useState(["", "", "", ""]);
  const [colorData, setColorData] = useState([{ color: "", url: "" }]);

  const handleAddProduct = () => {
    const productData = {
      name: productName,
      productType: category,
      price: price,
      image: imageUrls,
      sizes: [40.5, 41, 42, 43, 43.5, 44, 44.5, 45, 46],
      defaultSize: 40,
      colors: colorData,
    };

    axios
      .post("http://localhost:5000/items/", productData)
      .then((response) => {
        console.log("Product added successfully:", response.data);
        onClose();
        toast({
          title: "Product added.",
          status: "success",
          duration: 2000,
          position: "top-right",
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  const handleImageUrlChange = (index, url) => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = url;
    setImageUrls(newImageUrls);
  };

  const handleColorChange = (index, field, value) => {
    console.log(field)
    const newData = [...colorData];
    newData[index] = { ...newData[index], [field]: value };
    setColorData(newData);
  };

  const handleAddColor = () => {
    setColorData([...colorData, { color: "", url: "" }]);
  };

  const handleRemoveColor = (index) => {
    const newData = [...colorData];
    newData.splice(index, 1);
    setColorData(newData);
  };

  return (
    <>
      {/* Background Overlay */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"
        onClick={onClose}
      ></div>

      {/* AddProduct Form */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-[#FBFBFB] h-max w-7/12 rounded-lg z-50 font-Roboto">
        <div className="text-black text-xl  border-b-2 font-bold flex  justify-between">
          <div> Add Products</div>
          <IoIosClose onClick={onClose} className="text-4xl cursor-pointer" />
        </div>
        <div className="flex flex-col gap-3 p-5 tracking-tight ">
          {/* Product Name */}
          <div className="flex flex-col gap-2">
            <div className="font-medium text-sm ">Product Name</div>
            <div>
              <input
                type="text"
                placeholder="Enter your product name"
                className="w-full bg-[#F4F4F4] p-2 rounded-md pl-5 placeholder:text-sm"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
          </div>

          {/* Product Description */}
          <div className="flex flex-col gap-2">
            <div className="font-medium text-sm">Product Description</div>
            <div>
              <textarea
                type="text"
                placeholder="Enter your product Description"
                className="w-full bg-[#F4F4F4] p-2 rounded-md pl-5 placeholder:text-sm  min-h-24"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </div>
          </div>

          {/* Product Category, Price and Gender */}
          <div className="flex justify-evenly  gap-10">
            {/* Product Category */}
            <div className="flex flex-col gap-2  w-full">
              <div className="font-medium text-sm">Category</div>
              <div>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-[#F4F4F4] p-2 rounded-md pl-5 placeholder:text-sm"
                >
                  {["Mens", "Women", "Sports"].map((option, index) => (
                    <option key={index}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product Gender */}
            <div className="flex flex-col gap-2 w-full">
              <div className="font-medium text-sm">Gender</div>
              <div>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full bg-[#F4F4F4] p-2 rounded-md pl-5 placeholder:text-sm"
                >
                  {["Male", "Female"].map((option, index) => (
                    <option key={index}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product Price */}
            <div className="flex flex-col gap-2  w-full">
              <div className="font-medium text-sm">Price</div>
              <div>
                <input
                  type="text"
                  placeholder="Price"
                  className="w-full bg-[#F4F4F4] p-2 rounded-md pl-5 placeholder:text-sm"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Product Images */}
          <div className="font-medium text-sm ">Image Urls</div>
          <div className="grid grid-cols-2 gap-2">
            {[0, 1, 2, 3].map((index) => (
              <input
                key={index}
                type="text"
                placeholder={`Image${index + 1}`}
                className="w-full bg-[#F4F4F4] p-2 rounded-md pl-5 placeholder:text-sm"
                value={imageUrls[index]}
                onChange={(e) => handleImageUrlChange(index, e.target.value)}
              />
            ))}
          </div>

          {/* Colors */}
          <div className="font-medium text-sm ">Colors & URLs</div>
          {colorData.map((color, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                placeholder={`Color ${index + 1}`}
                className="w-2/5 bg-[#F4F4F4] p-2 rounded-md pl-5 placeholder:text-sm"
                value={color.color}
                onChange={(e) => handleColorChange(index, "color", e.target.value)}
              />
              <input
                type="text"
                placeholder={`Image URL ${index + 1}`}
                className="w-full bg-[#F4F4F4] p-2 rounded-md pl-5 placeholder:text-sm"
                value={color.url}
                onChange={(e) => handleColorChange(index, "url", e.target.value)}
              />
              <button
                type="button"
                onClick={() => handleRemoveColor(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddColor}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Color
          </button>
        </div>

        {/* Add Product Button */}
        <div className="w-full flex flex-col">
          <Button
            onClick={handleAddProduct}
            className="flex gap-3  lg:mt-10 mt-2 text-4xl "
            variant="solid"
            bgColor="black"
            color="white"
            colorScheme="#ffffff"
            height={12}
            _hover={{ bgColor: "#4F5054", color: "white" }}
          >
            <CiShoppingCart className="text-2xl" />
            Add Product
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
