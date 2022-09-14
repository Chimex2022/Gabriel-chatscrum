import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import taskList from "../../static/tasks";

const Task = ({ id, index, item }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="single_task"
          >
            {item}
          </div>
        );
      }}
    </Draggable>
  );
};

export default function Tasks() {
  const [taskRoll, setTaskRoll] = useState(taskList);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(taskRoll);
    const [reorderedItems] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItems);

    setTaskRoll(items);
  };

  return (
    <div className="tasked">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="container">
          <Droppable droppableId="tasket">
            {(provided) => {
              return (
                <div
                  id="tasket"
                  className="weekly box"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h3>Weekly Tasks</h3>
                  {taskRoll.map(({ id, task }, idx) => {
                    return <Task key={id} item={task} id={id} index={idx} />;
                  })}
                  {provided.placeholder}
                </div>
              );
            }}
          </Droppable>

          <Droppable droppableId="tasketer">
            {(provided) => {
              return (
                <div
                  className="daily box"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h3>Daily Target</h3>
                  {provided.placeholder}
                </div>
              );
            }}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
}
