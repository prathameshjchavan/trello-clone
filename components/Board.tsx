"use client";
import { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const Board = () => {
	useEffect(() => {
		// getBoard();
	}, []);

	return (
		<DragDropContext>
			<Droppable droppableId="board" direction="horizontal" type="column">
				{(provided) => <div></div>}
			</Droppable>
		</DragDropContext>
	);
};

export default Board;
