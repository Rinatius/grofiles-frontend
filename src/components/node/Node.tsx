import React, {useEffect, useState} from "react";
import axios from "axios";
import "./Node.css";
import {NodeGraph} from "../../types/types";


const Node = ({pk}: NodeProps) => {
    const [graph, setGraph] = useState<NodeGraph | undefined>(undefined);

    useEffect(() => {
        axios
            .get("/noderels/", {params: {pk: pk}})
            .then(res => res.data as NodeGraph)
            .then(res => setGraph(res))
            .catch((err) => console.log(err));
        return () => {
            console.log("Component will be unmount");
        }
    }, [pk]);

    return (
        <div>
            {JSON.stringify(graph, null, 2)}
        </div>
    );
};

type NodeProps = {
    pk: BigInt;
};

export default Node;