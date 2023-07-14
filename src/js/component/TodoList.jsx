import React, { useState } from "react";




export const TodoList = () => {
    const [inputValue, setInputValue] = useState("");
	const [list, setList] = useState([]);
	const handleKeyDown = (e) => {
		if(e.key === "Enter") {
            e.preventDefault();
            if (inputValue.trim() !== ""){
            setList(list.concat(inputValue));
            setInputValue("");
            }    
		}
	}
    const handleDelete = (index) => {
        setList
    setList(list.filter((_, currentIndex) => index !== currentIndex));
    };
    const footer = () => {
        {list === 0 ? (Add task)};
    }
    return (
    <div className="container">
        <h1>To do List</h1>
        <ul>
            <h3>New List</h3>
            <li>
                <input className="input" type="text" 
                onChange={(e) => setInputValue(e.target.value)} 
                onKeyDown={(e) => handleKeyDown(e)} value={inputValue}  
                placeholder="Añadir tarea" />
            </li>
            
            {list.map((item, index) => (
                <li className="newtask"> {item} {" "} <i className="fa-solid fa-times" onClick={() => handleDelete(index)}></i>
                </li>
            ))}
            <div className="listfooter"> {list.length} Task </div>
        </ul>
        
    </div>
    )
}