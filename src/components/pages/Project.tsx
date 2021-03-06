import React from "react";
import { history } from "../../Router/AppRouter";

interface Props {
  hooks: () => [number, (n: number) => void];
  service: (name: string) => [any, boolean, () => Promise<void>];
}

const Project: React.FC<Props> = ({ hooks, service }) => {
  const [count, add] = hooks();
  const [response, isLoading, fetch] = service("SuguruSasaki");
  console.log("this is project page.");
  console.log(isLoading);
  return (
    <div>
      <h1>This is project page.</h1>
      <div>{count}</div>
      <div>{`${isLoading}`}</div>
      <div>{`${JSON.stringify(response)}`}</div>
      <button onClick={() => add(10)}>CLICK</button>
      <button onClick={() => history.push("/about")}>About</button>
      <button onClick={() => history.push("/contact")}>Contact</button>
      <button onClick={() => fetch()}>Fetch data</button>
    </div>
  );
};

export default Project;
