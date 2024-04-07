import React, { useState, useEffect } from "react";
import axios from "axios";
import { PiGithubLogoThin } from "react-icons/pi";
import Clothify from "../assets/clothify-dark.png";
const Contributors = () => {
  const [contributors, setContributors] = useState([]);
  const repoOwner = "poudelsanchit";
  const repoName = "Ecommerce";
  const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`;

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setContributors(response.data);
      } catch (error) {
        console.error("Error fetching contributors:", error);
      }
    };

    fetchData();
  }, [apiUrl]);
  return (
    <div className="w-full min-h-screen h-full flex justify-center ">
      <div className="w-full font-roboto flex flex-col items-center gap-4 ">
        <div className="flex flex-col gap-3">
          <a
            href="https://github.com/poudelsanchit/Clothify"
            target="_blank"
            className="flex items-center gap-2 border-2 border-secondary-bg rounded-lg transition-all w-[24rem] hover:scale-105 mt-4 font-Poppins"
          >
            <div className="flex flex-col items-center p-1">
              <img src={Clothify} alt="" className="w-16
            " />
              <h4 className="font-bold text-2xl">Clothify</h4>
            </div>
            <p className="text-md">
              Visit this project's github repository and do give it a star if
              you liked our work. Thank you.
            </p>
            <div className="rounded-r-md h-full bg-button p-2 text-white flex items-center text-3xl border-l-2 border-dark-bg">
              <PiGithubLogoThin />
            </div>
          </a>
        </div>
        <div className="font-semibold text-2xl mt-4 w-8/12">Github Contributors:</div>

        <div className="  flex justify-center  w-full ">
          <div className="w-8/12 grid grid-cols-2 gap-10">
            
          {contributors.length !==0 ?contributors.map((contributor, index) => (
            <a
              key={index}
              href={contributor.html_url}
              target="_blank"
              className="w-fit min-w-[20rem] h-fit flex justify-between border-2  border-secondary-bg rounded-lg font-normal font-Poppins transition-all text-dark-bg hover:scale-105 opacity-90 hover:opacity-100 "
            >
              <div className="flex items-center gap-2 p-2">
                <img
                  src={contributor.avatar_url}
                  alt=""
                  className=" w-20 rounded-full "
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-md">{contributor?.login}</h3>
                  {/* <div className="text-md flex items-center gap-1">
                    Contributions:
                    <span className="text-xl text-secondary-text">{contributor.contributions}</span>
                  </div> */}
                </div>
              </div>
              <div className="rounded-r-md bg-button p-2 text-white flex items-center text-3xl border-l-2 border-secondary-bg">
                <PiGithubLogoThin />
              </div>
            </a>
          )) : <div>loading....</div>}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contributors;
