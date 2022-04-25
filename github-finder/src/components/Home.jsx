import React, { useState, useEffect } from "react";
import Search from "./Search";
import MainContent from "./MainContent";
import Axios from "../apis/Axios";
const Home = () => {
  let [user, setUser] = useState("");
  let [repos, setRepos] = useState([]);
  let [loading, setLoading] = useState(false);

  let onTermSubmit = async term => {
    try {
      let client_id = "Iv1.85d28a3013bae65c";
      let client_secret = "952938b427c52ed1570c557756a9c53b69a023de";
      let users = await Axios.get(
        `/users/${term}?Client_id${client_id}&Client_secret${client_secret}`
      );
      let ReposData = await Axios.get(
        `/users/${term}/repos?Client_id${client_id}&Client_secret${client_secret}`
      );
      setLoading(true);
      setUser(users.data);
      setRepos(ReposData.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <section id="mainBlock">
      <article>
        <Search onTermSubmit={onTermSubmit} user={user} loading={loading} />
        <MainContent user={user} loading={loading} repos={repos} />
      </article>
    </section>
  );
};

export default Home;
