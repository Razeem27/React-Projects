import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "../../api/Axios";



const EditPost = () => {
  const[title,setTitle]=useState("")
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    let fetchPost =async () => {
      let { data } = await Axios.get(`/posts/${id}`);
      setTitle(data.title);
      setDetails(data.details);
    }
    fetchPost();
  }, [id])
  
  let handleSubmit = (e) => {
    e.preventDefault();
    let fetchPost = async () => {
      try {
        await Axios.put(`/posts/${id}`, { title, details })
        navigate('/')
        
      } catch (error) {
        console.log(error);
      }
    }
    fetchPost();
  }
  
  
  return (
    <section id="authBlock" className="card">
      <article className="card-body col-4 mx-auto bg-light my-4">
        <h2 className="text-center font-weight-bold text-dark text-uppercase my-2">
          Update Post
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Details</label>
            <textarea
              id="details"
              cols="30"
              rows="10"
              className="form-control"
              value={details}
              onChange={e => setDetails(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-success btn-block my-2">
              {loading === true ? "loading" : "Update"}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default EditPost;
