import axios from "axios";
import { useState } from "react";

const useGithubService = (name: string): [any, () => Promise<void>] => {
  const [response, setResponse] = useState({});
  const fetch = async () => {
    const http = axios.create({
      baseURL: "https://api.github.com",
    });
    const response = await http.get(`/users/${name}`);
    setResponse(response);
  };
  return [response, fetch];
};

export default useGithubService;
