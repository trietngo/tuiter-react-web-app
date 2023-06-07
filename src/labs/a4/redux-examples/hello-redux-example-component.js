import React from "react";
import { useSelector } from "react-redux";
import hello from "./reducers/hello";

const HelloReduxExampleComponent = () => {
    const message = useSelector((state) => state.hello.message);

    return (
        <h1>{message}</h1>
    );
}

export default HelloReduxExampleComponent;