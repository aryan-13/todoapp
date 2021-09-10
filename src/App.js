import './App.css';
import { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import List from './List';
import Button from '@material-ui/core/Button';
import { db } from './firebase_config';
import firebase from 'firebase/app';

function App() {
	const [todos, setTodos] = useState([]);

	const [input, setInput] = useState('');

	function getTodos() {
		db.collection('todo').onSnapshot(function (querySnapshot) {
			setTodos(
				querySnapshot.docs.map((doc) => ({
					id: doc.id,
					inProgress: doc.data().inProgress,
					todo: doc.data().data,
				}))
			);
		});
	}
	useEffect(() => {
		getTodos();
	}, []);
	const addTodo = (e) => {
		e.preventDefault();
		if (e.target.value === '') {
			return;
		}
		db.collection('todo').add({
			inProgress: true,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			data: input,
		});
		setInput('');
	};
	return (
		<div className="App flex">
			<h1>TODO APP😄</h1>
			<form>
				<TextField
					id="standard-basic"
					value={input}
					onChange={(e) => {
						setInput(e.target.value);
						console.log(e.target.value);
					}}
				/>
				<Button variant="contained" onClick={addTodo}>
					Add
				</Button>
			</form>
			{todos.map((task) => {
				return (
					<List data={task.todo} inProgress={task.inProgress} id={task.id} />
				);
			})}
		</div>
	);
}

export default App;
