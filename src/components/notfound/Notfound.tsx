import React from "react";
import "./Notfound.css";


const Notfound = ({ message }: NotfoundProps) => <h2>Not found: {message}</h2>;

type NotfoundProps = {
  message?: string;
};

export default Notfound;