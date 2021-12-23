import React from 'react'
import "./App.css"
export default function Card(url) {
    return (
        <div className="cardDisplay">
            <img id="imgDisplay" src="https://picsum.photos/536/354"></img>
            <p>Name : </p>
            <p>Email : </p>
            <p>Contact number : </p>
            <button id="delete">Delete</button>
        </div>
    )
}
