import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

// "http://api.github.com/users"
const Home = () => {
  const [state, setState] = useState([]);
  // useEffect(() => {
  //     fetch("https://api.github.com/users", {
  //         method:'GET',
  //         headers: {
  //             'content-type': 'application/json',
  //         },
  //     }
  //     ).then(res=>res.json()).then(data=>setState(data))
  // }, [])

    // AJAX way
  // useEffect(() => {
  //     let xhr = new XMLHttpRequest();
  //     xhr.open("GET", "https://api.github.com/users");
  //     xhr.onload = () => {
  //         let user = JSON.parse(xhr.response);
  //         setState(user)
  //     };
  //     xhr.send();
  // },[])
    

    // Axios method
//     useEffect(() => {
//         let fetchData = async () => {
//             try {
//                 let data = await axios.get("https://api.github.com/users");
//                 let payload=data.data
//                 setState(payload)    
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchData();
//  },[])

  console.log(state);
  return (
    <div>
      {state.length == 0 ? (
        <h1>loading...</h1>
      ) : (
        state.map(item => {
          return (
            <Fragment key={item.id}>
              <li>
                <img src={item.avatar_url} alt="" />
                <h1>{item.login}</h1>
              </li>
            </Fragment>
          );
        })
      )}
    </div>
  );
};

// export default Home;
