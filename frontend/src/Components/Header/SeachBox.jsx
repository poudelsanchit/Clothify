import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchedItem from './SearchedItem';

const SeachBox = ({ searchQuery }) => {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const requests = [
        axios.get("http://localhost:5000/items/"),
      ];

      const [data1] = await Promise.all(
        requests
      );
      const combinedData = [
        ...data1.data
      ];

      setItems(combinedData);
    } catch (error) {
      console.error("Error fetching data from APIs:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-[#f4f4f4] h-max w-full absolute mt-3 rounded-md  text-sm">
      {!searchQuery ? (
        <div>No recent searches.....</div>
      ) : (
        <div className="flex gap-2 flex-col">
          {items
            .filter((result) =>
              result.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .slice(0,5).map((item, index) => (
              <SearchedItem key={index} item= {item}/>
            ))}
        </div>
      )}
    </div>
  );
};

export default SeachBox;
