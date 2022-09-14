import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import taskList from "../../static/tasks";

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
                  {taskRoll.map(({ id, item }, idx) => (
                    <Draggable key={id} draggableId={id} index={idx}>
                      {(provided) => {
                        console.log(item);
                        return (
                          <p
                            className="single_task"
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            {item}
                          </p>
                        );
                      }}
                      {provided.placeholder}
                    </Draggable>
                  ))}
                </div>
              );
            }}
          </Droppable>

          <Droppable droppableId="tasketer">
            {(provided) => {
              return (
                <div
                  id="tasketer"
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
