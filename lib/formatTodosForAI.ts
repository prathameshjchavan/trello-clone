const formatTodosForAI = (board: Board) => {
	const todos = Array.from(board.columns.entries());

	const faltArray = todos.reduce((map, [key, value]) => {
		map[key] = value.todos;
		return map;
	}, {} as { [key in TypedColumn]: Todo[] });

	// reduce to key: value(length)
	const flatArrayCounted = Object.entries(faltArray).reduce(
		(map, [key, value]) => {
			map[key as TypedColumn] = value.length;
			return map;
		},
		{} as { [key in TypedColumn]: number }
	);

	return flatArrayCounted;
};

export default formatTodosForAI;
