import React, { useContext } from "react";
import "./addtask.css";
import { globalVariable } from "./RoutingPage";
import { useNavigate } from "react-router-dom";

const AddingTask = () => {
  const { tableTask, settable, task, setTask } = useContext(globalVariable);

  const nav=useNavigate();

  const onChangeHandle = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const onClickHandle = (e) => {
    e.preventDefault();
    settable([...tableTask, task]);
    setTask({
      name: "",
      description: "",
      status: "",
    });
    nav("/");
  };

  console.log(task, tableTask);

  return (
    <>
      {/* <h1>task adding</h1> */}
      <div>
        <div>
          <header className="headersection">
            <h2>Add task</h2>
          </header>
          <section className="addtasksection1">
            <form>
              <div>
                <label for="taskname">Task Name </label>
                <input
                  type="text"
                  id="taskname"
                  value={task.name}
                  onChange={onChangeHandle}
                  name="name"
                  placeholder="enter the taskname"
                />
              </div>
              <div>
                <label for="taskDescription">Task Description </label>
                <input
                  type="text"
                  id="taskDescription"
                  value={task.description}
                  onChange={onChangeHandle}
                  name="description"
                  placeholder="enter the taskname"
                />
              </div>
              <div>
                <label for="taskStatus">Task Status </label>
                <select
                  value={task.status}
                  name="status"
                  onChange={onChangeHandle}
                >
                  <option>Select</option>
                  <option value="assigned">Assigned</option>
                  <option value="started">Started</option>
                  <option value="inprogress">Inprogress</option>
                  <option value="completed">Completed</option>
                  <option value="reviewed">Reviewed</option>
                  <option value="done">Done</option>
                </select>
              </div>
              <div>
                <button onClick={onClickHandle}>Submit</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default AddingTask;
