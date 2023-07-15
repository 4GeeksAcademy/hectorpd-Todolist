import React, { useState } from "react";





export const TodoList = () => {
    const [inputValue, setInputValue] = useState("");
	const [list, setList] = useState([]);
    const [isEmpty, setIsEmpty] = useState(true);
	const handleKeyDown = (e) => {
		if(e.key === "Enter") {
            e.preventDefault();
            if (inputValue.trim() !== ""){
            setList(list.concat(inputValue));
            setInputValue("");
            setIsEmpty(false);
            }    
		}
	}
    const handleDelete = (index) => {
        setList
    setList(list.filter((_, currentIndex) => index !== currentIndex));
    setIsEmpty(list.length === 1);
    };
    
    return (
        
    <div className="main">
        <h1>To do List</h1>
        <div className="container">
            <h3>New List</h3>
            <ul>
                <li>
                    <input
                    className="input"
                    type="text"
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)}
                    value={inputValue}
                    placeholder="New Task"/>
                </li>
                {list.map((item, index) => (
                    <li className="newtask">
                        {" "}
                        {item}{" "}
                            <i className="fas fa-times icon"
                            onClick={() => handleDelete(index)}>
                            </i>
                    </li>
                ))}
            </ul>
            {isEmpty && <div className="listfooter">No tasks, Add task</div>}
            {!isEmpty && <div className="listfooter"> {list.length} Task </div>}
        </div>
        <div className="pagetwo"></div>
        <div className="pagethree"></div>
    </div>
    );
}