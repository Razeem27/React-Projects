import React, { useState, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom"
import Axios from "../../api/Axios";

const Post = () => {
  let [state, setState] = useState(null);
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  let fetchPosts = async () => {
    try {
      let { data } = await Axios.get("/posts");
      setLoading(true);
      setState(data);
    } catch (error) {
      console.log(error);
    }
  };
 
  let deletePost = (id) => {
    let fetchupdate = async () => {
      try {
        await Axios.delete(`/posts/${id}`)
        navigate('/')
        fetchPosts();
      } catch(error) {
        console.log(error);
      }
    }
    fetchupdate();
  }
  

  useEffect(() => {
    fetchPosts();
    setLoading(false);
    
  },[]);
  return (
    <div className="container my-4">
      <table className="table table-bordered table-hovered">
        <thead className="thead-dark text-capitalize">
          <tr>
            <th>Title</th>
            <th>Details</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {loading == false ? (
            <tr>
              <td>
                <h3>Loading....</h3>
              </td>
            </tr>
          ) : (
            state.map(post => {
              return (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>{post.details}</td>
                  <td>
                    <Link
                      to={`/edit-post/${post.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={()=>deletePost(post.id)}>Delete</button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Post;
