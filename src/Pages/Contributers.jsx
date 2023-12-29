import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PiGithubLogoThin } from "react-icons/pi";
const Contributors = () => {
    const [contributors, setContributors] = useState([]);
    const repoOwner = 'poudelsanchit';
    const repoName = 'Ecommerce';
    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`;


    useEffect(() => {
        window.scrollTo({behavior:'smooth', top:0, left:0}) 
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
                setContributors(response.data);
            } catch (error) {
                console.error('Error fetching contributors:', error);
            }
        };

        fetchData();
    }, [apiUrl]);
    console.log(contributors)
    return (
      <div className="w-screen h-screen flex justify-center ">
        <div className="w-3/6  font-roboto flex flex-col items-center  pl-5 gap-4 ">
          <div className="font-semibold text-2xl mt-4">
            Github Contributors:
          </div>
          <div className="flex flex-col gap-2 ">
            {contributors.map((contributor) => (
              <a
                href={contributor.html_url}
                target="_blank"
                className="lg:h-28 h-16 lg:w-96 w-64 bg-slate-700 text-white font-normal font-Poppins rounded-md flex gap-5 pl-5 justify-start items-center"
              >
                <img
                  src={contributor.avatar_url}
                  alt=""
                  className="lg:h-14 lg:w-14 w-10 h-10 object-cover rounded-full border-2 border-datessecondary"
                />
                <div className="lg:text-2xl text-base"> {contributor?.login}</div>
                <div className='h-full lg:w-16 w-10 bg-blue-700 hover:bg-blue-900 ml-auto rounded-r-md flex justify-center items-center text-4xl'><PiGithubLogoThin/></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Contributors;
