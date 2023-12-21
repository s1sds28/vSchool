import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";

export default function Comment(props) {

    return (
    <div className="comment">
        <p> {props.text}</p>
    </div >
    );
}