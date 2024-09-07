import React from "react";
import check from "../assets/check.png";
import uncheck from "../assets/uncheck.png";
import delete_icon from "../assets/delete.png";
import components1 from "../assets/Component.png";

const Todoitems = ({ id, task, iscompleted, deleteTodo, toggleCompleted }) => {
	return (
		<div className="flex item-center my-3 gap-3 px-2">
			<div
				className="flex flex-1 items-center cursor-pointer"
				onClick={() => {
                    toggleCompleted(id);
				}}
			>
				<img src={iscompleted? check : uncheck} alt="" />
                <p className={`ml-4 text-slate-700 text-[18px] ${iscompleted? 'line-through':''}`}>{task}</p>
			</div>
			<img
				className="w-4 h-5 mt-1 cursor-pointer"
				src={delete_icon}
				alt=""
				onClick={() => {
					deleteTodo(id);
				}}
			/>
		</div>
	);
};

export default Todoitems;
