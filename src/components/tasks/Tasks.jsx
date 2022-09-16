import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

// const Task = ({ id, index, name, time, deleteTask, scrumgoalhistory_set }) => {
//   return (
//     <Draggable draggableId={id} index={index}>
//       {(provided) => {
//         return (
//           <div
//             ref={provided.innerRef}
//             {...provided.draggableProps}
//             {...provided.dragHandleProps}
//             className="single_task"
//             onClick={deleteTask}
//           >
//             {name}{" "}
//             <div>
//               {time.slice(0, 10)} at {time.slice(12, 16)}
//             </div>
//             <div className="brown">
//               {scrumgoalhistory_set.map(({ id, done_by }) => (
//                 <p key={id}>{done_by}</p>
//               ))}
//             </div>
//           </div>
//         );
//       }}
//     </Draggable>
//   );
// };

export default function Tasks({ data, deleteTask }) {
  const [taskRoll, setTaskRoll] = useState(data);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const tasks = Array.from(taskRoll);
    const [reorderedItems] = tasks.splice(result.source.index, 1);
    tasks.splice(result.destination.index, 0, reorderedItems);

    setTaskRoll(tasks);
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
                  {data.map(
                    ({ id, name, time_created, scrumgoalhistory_set }, idx) => {
                      return (
                        <Draggable draggableId={`${id}`} index={idx} key={id}>
                          {(provided) => {
                            return (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="single_task"
                                onClick={deleteTask}
                              >
                                {name}{" "}
                                <div>
                                  {time_created.slice(0, 10)} at {time_created.slice(12, 16)}
                                </div>
                                <div className="brown">
                                  {scrumgoalhistory_set.map(
                                    ({ id, done_by }) => (
                                      <p key={id}>{done_by}</p>
                                    )
                                  )}
                                </div>
                              </div>
                            );
                          }}
                        </Draggable>
                      );
                    }
                  )}
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
