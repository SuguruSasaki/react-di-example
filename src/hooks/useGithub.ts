import axios from "axios";
import { useState } from "react";

const useGithubService = (name: string): [any, boolean, () => Promise<void>] => {
  const [response, setResponse] = useState({});
  const [isLoading, setLoading] = useState(false)
  const fetch = async () => {
    setLoading(true)
    const http = axios.create({
      baseURL: "https://api.github.com",
    });
    try {
      const response = await http.get(`/users/${name}`);
      setResponse(response);
    } catch (e){
      console.log(e)
    }
    setLoading(false)
  };
  return [response, isLoading, fetch];
};

export default useGithubService;
