import { gql } from '@apollo/client/core';

export const ADD_TODO = gql`
	mutation AddTodoMutation($title: String!) {
		addTodo(title: $title) {
			id
			title
		}
	}
`;
