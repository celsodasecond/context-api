import React, { createContext, useState, useReducer } from "react";
import { todosReducer } from "../reducers/todosReducers";

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
	const [todos, dispatch] = useReducer(todosReducer, [
		{ text: "Plan the family trip", id: 1 },
		{ text: "Goshopping for dinner", id: 2 },
		{ text: "Go for a walk", id: 3 },
	]);

	// const [todos, setTodos] = useState([
	// 	{ text: "Plan the family trip", id: 1 },
	// 	{ text: "Goshopping for dinner", id: 2 },
	// 	{ text: "Go for a walk", id: 3 },
	// ]);

	// const addTodo = (todo) => {
	// 	setTodos([...todos, { text: todo, id: Math.random() }]);
	// };

	// const removeTodo = (id) => {
	// 	setTodos(
	// 		todos.filter((todo) => {
	// 			return todo.id !== Number(id);
	// 		})
	// 	);
	// };

	return (
		// <TodoListContext.Provider value={{ todos, addTodo, removeTodo }}>
		<TodoListContext.Provider value={{ todos, dispatch }}>
			{children}
		</TodoListContext.Provider>
	);
};

export default TodoListContextProvider;
