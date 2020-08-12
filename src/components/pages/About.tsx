import React from "react";

type AboutProps = {};

const About: React.FC<AboutProps> = ({}) => {
  return (
    <div>
      <h1>About page.</h1>
      {console.log("hello world")}
    </div>
  );
};

export default About;
