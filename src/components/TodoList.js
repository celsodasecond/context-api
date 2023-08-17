import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TodoListContext } from "../context/TodoListContext";

// class TodoList extends React.Component {
// 	static contextType = ThemeContext;
// 	render() {
// 		const { isDarkTheme, lightTheme, darkTheme, changeTheme } = this.context;
// 		const theme = isDarkTheme ? darkTheme : lightTheme;

// 		return (

// 		);
// 	}
// }

const TodoList = () => {
	const [todo, setTodo] = useState("");
	const { todos, addTodo, removeTodo } = useContext(TodoListContext);
	const { isDarkTheme, lightTheme, darkTheme, changeTheme } =
		useContext(ThemeContext);
	const theme = isDarkTheme ? darkTheme : lightTheme;

	const handleChange = (e) => {
		setTodo(e.target.value);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		// console.log(todo);
		addTodo(todo);
	};

	const handleRemoveTodo = (e) => {
		const id = e.target.id;
		removeTodo(id);
	};

	return (
		<div
			style={{
				background: theme.background,
				color: theme.text,
				textAlign: "center",
			}}
			className="ui list">
			{todos.length ? (
				todos.map((todo) => {
					return (
						<p
							id={todo.id}
							onClick={handleRemoveTodo}
							key={todo.id}
							className="item">
							{todo.text}
						</p>
					);
				})
			) : (
				<div>You have no Todos</div>
			)}

			<form onSubmit={handleFormSubmit}>
				<label htmlFor="todo">Add new Todo: </label>
				<input type="text" id="todo" onChange={handleChange} />
				<button
					type="submit"
					value="Add new todo"
					className="ui button primary">
					Submit
				</button>
			</form>

			<button className="ui button primary" onClick={changeTheme}>
				Change the Theme
			</button>
		</div>
	);
};

export default TodoList;
