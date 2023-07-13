import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [list, setList] = useState([]);
	const handleKeyDown = (e) => {
		if(e.key === "Enter") {
			setList(list.concat(inputValue));
		}
	}
	return (
		<div className="container">
			<h1>Lista</h1>
			<ul>
				<li><input type="text" onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) => handleKeyDown(e)} value={inputValue}  placeholder="Añadir tarea" /></li>
				{list.map((item, index) => (
					<li> {item} {" "} <i class="fa-solid fa-x" 
							onClick={() => setList(list.filter((l, currentIndex) => index != currentIndex))}></i>
					
					</li>
				))}
				
			</ul>
			<div> {list.length} Task </div>
		</div>
	);
};

export default Home;
