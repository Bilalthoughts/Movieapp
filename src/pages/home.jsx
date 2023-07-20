import React, { useEffect, useState } from "react";
import Search from "../components/search";
import axios from "axios";
import Titleme from "../components/title";
import { AiFillHeart } from "react-icons/ai";


const Home = () => {
  const [arr, setArr] = useState([]);
  const [find, setFind] = useState("");
  const [finalpoint, setFinalpoint] = useState("");
  const [like , setlike] = useState('')

  const [fav, setFav] = useState({
    id:'',
    url:'',
    text:'',
    year:''
    
  })
  console.log(fav)
  useEffect(()=>{
    const handleLike = ()=>{
    
      if(like){
        const liked = arr.filter((e)=>e.id === like)
        const {id, primaryImage:{url},titleText:{text},releaseYear:{year}} = liked[0]
       setFav({
        id,
        url,text,year
       })

     
      }
    }
    handleLike();
    
  },[like])

  useEffect(() => {
    const fetchData = async () => {
      if (finalpoint) {
        const options = {
          method: "GET",
          url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${find}`,
          params: {
            exact: "false",
            titleType: "movie",
          },
          headers: {
            "X-RapidAPI-Key": "093a6cbd38msh08dc99cd7ce0b66p10dc05jsnbe21d5b4347e",
            "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
          },
        };

        try {
          const response = await axios.request(options);
          const data = await response.data;

          if (data.results.length === 0) {
            alert("No results found for the entered query name");
          } else {
            console.log(data)
            setArr(data.results);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, [finalpoint]);

  return (
    <>
      <section className="text-white body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="mx-auto  text-center  block py-2 ">
            <Search find={find} setFind={setFind} setFinalpoint={setFinalpoint} />
          </div>

          <div className="flex flex-wrap justify-center">
            {finalpoint && arr.length > 0 ? (
              arr.map((e) => (
                <div onClick={()=> setlike(e.id)}
                  className="lg:w-1/5 md:w-1/3 border relative  rounded m-2 w-full"
                  key={e.id}
                >
                  <span className="absolute  top-5 right-2 text-2xl p-1 bg-black shadow-xl rounded-lg z-10 "><AiFillHeart/></span>
                  {e.primaryImage && e.primaryImage.url ? (
                    <a className="block relative h-80 rounded overflow-hidden">
                      <img
                        alt="not found"
                        className="object-cover rounded object-center w-full h-full block"
                        src={e.primaryImage.url}
                      />
                    </a>
                  ) : (
                    <a className="block relative h-80 rounded overflow-hidden">
                      <img
                        alt="not found"
                        className="object-cover rounded object-center w-full h-full block"
                        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1689253699~exp=1689254299~hmac=88d8ac06cdff910b3abd9ea7c29ef90ba6b53efc7898552cf53028e403b9cc1f"
                      />
                    </a>
                  )}
                  <div className="pt-4 pb-1 bg-gray-900 px-2">
                    <h3 className="text-xs tracking-widest title-font mb-1">
                      {e.titleText?.text}
                    </h3>
                    <h2 className="title-font text-lg font-medium">{e.l}</h2>
                    <p className="mt-1">Year {e.releaseYear?.year}</p>
                  </div>
                </div>
              ))
            ) : (
              <>
                <Titleme />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
