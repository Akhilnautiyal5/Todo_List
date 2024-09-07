import React, { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import Todoitems from "./Todoitems";

const To_do_Card = () => {
	const [todoList, setToDoList] = useState(localStorage.getItem('todos')?JSON.parse(localStorage.getItem('todos')) : []);

	const inputRef = useRef();

	const add = () => {
		const inputText = inputRef.current.value.trim();

		if (inputText === "") return null;

		const newTodo = {
			id: Date.now(),
			task: inputText,
			iscompleted: false,
		};
		setToDoList((prev) => [...prev, newTodo]);
		inputRef.current.value = "";
	};

	const deleteTodo = (id) => {
		setToDoList((prev) => prev.filter((todo) => todo.id !== id));
	};

	const toggleCompleted = (id) => {
		setToDoList((prev) =>
			prev.map((todo) => {
				if (todo.id === id) {
					return { ...todo, iscompleted: !todo.iscompleted };
				}
				return todo;
			})
		);
	};

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList))
	}, [todoList]);

	return (
		<div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-800">
			<div className="w-96 max-w-md min-h-[500px] bg-zinc-100 flex flex-col rounded-md">
				{/* -------------------------title------------------------- */}
				<div className="flex items-center gap-3 px-5 py-6">
					<img className="w-8" src={todo_icon} alt="to do icon" />
					<h1 className="text-3xl font-semibold">To-Do List</h1>
				</div>
				{/* -------------------------input------------------------- */}
				<div className="flex items-center overflow-hidden bg-zinc-300 rounded-full mx-3 mb-2">
					<input
						ref={inputRef}
						type="text"
						className="w-full h-full p-3 bg-transparent rounded-full border-0 outline-none flex-1 placeholder:text-slate-600"
						placeholder="Add your task"
					/>
					<button
						className="h-13 bg-blue-500 active:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
						onClick={add}
					>
						Add Task
					</button>
				</div>
				{/* -------------------------task list------------------------- */}
				<div className="flex-1 overflow-y-auto max-h-[300px] mx-3">
					{todoList.map((item, index) => {
						return (
							<Todoitems
								key={index}
								id={item.id}
								task={item.task}
								iscompleted={item.iscompleted}
								deleteTodo={deleteTodo}
								toggleCompleted={toggleCompleted}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default To_do_Card;
