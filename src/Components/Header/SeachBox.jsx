import axios from "axios";
import React, { useEffect, useState } from "react";

const SeachBox = ({ searchQuery }) => {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const requests = [
        axios.get("http://localhost:3000/popular"),
        axios.get("http://localhost:3000/bestsales"),
        axios.get("http://localhost:3000/bestchoices"),
        axios.get("http://localhost:3000/women"),
        axios.get("http://localhost:3000/sports"),
        axios.get("http://localhost:3000/men"),
      ];

      const [data1, data2, data3, data4, data5, data6] = await Promise.all(
        requests
      );
      const combinedData = [
        ...data1.data,
        ...data2.data,
        ...data3.data,
        ...data4.data,
        ...data5.data,
        ...data6.data,
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
    <div className="bg-[#f4f4f4] h-max w-full absolute mt-3 rounded-md p-4 text-sm">
      {!searchQuery ? (
        <div>No recent searches.....</div>
      ) : (
        <div>
          {items
            .filter((result) =>
              result.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .slice(0,5).map((item, index) => (
              <h1 key={index}>{item.name}</h1>
            ))}
        </div>
      )}
    </div>
  );
};

export default SeachBox;
