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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi esse nostrum animi beatae obcaecati iste, sint cumque eligendi qui, voluptate cupiditate ut inventore. Odio commodi explicabo libero rem molestiae quae consectetur doloribus. Dignissimos assumenda excepturi, ea unde laboriosam eaque sapiente quos aspernatur, ab velit impedit, libero suscipit amet optio eius distinctio consequuntur temporibus reiciendis provident iste voluptas enim asperiores? Vero quidem accusantium totam eum minus, magni nihil inventore temporibus expedita possimus dolorem harum aut quos eveniet quae veritatis ipsa odit optio? Velit quos, illum fugiat perspiciatis nisi repellat doloribus cum tempora molestiae at possimus, ut ipsam voluptas id, aliquam ab.</p>
        </div>
      </div>
    );
};

export default Contributors;
