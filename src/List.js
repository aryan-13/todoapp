import React from 'react';
import './List.css';
// import { makeStyles } from '@material-ui/core/styles';

import { db } from './firebase_config';
import Button from '@material-ui/core/Button';

function List(props) {
	function toggleTodo() {
		db.collection('todo').doc(props.id).update({
			inProgress: !props.inProgress,
		});
	}

	function deleteTodo() {
		db.collection('todo').doc(props.id).delete();
	}
	return (
		<div className="list flex-row">
			<div>
				<h3>{props.data}</h3>
				<p>{props.inProgress ? 'In Progress⌚' : 'Completed✅'}</p>
			</div>
			<div sty>
				<Button onClick={toggleTodo}>Toggle</Button>
				<Button onClick={deleteTodo}>X</Button>
			</div>
		</div>
	);
}

export default List;
