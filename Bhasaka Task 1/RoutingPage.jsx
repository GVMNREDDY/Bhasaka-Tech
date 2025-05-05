import React, { createContext, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import AddingTask from "./AddTask.";
import Maintable from "./MainTable";

export const globalVariable = createContext();

const RoutingTaskManagement = () => {
  const [tableTask, settable] = useState([]);

  const [task, setTask] = useState({
    name: "",
    description: "",
    status: "",
  });

  return (
    <>
      <globalVariable.Provider value={{ tableTask: tableTask, settable:settable, task:task, setTask:setTask }}>
        <HashRouter>
          <Routes>
            <Route index element={<Maintable />} />
            <Route path="/taskAdding" element={<AddingTask />} />
          </Routes>
        </HashRouter>
      </globalVariable.Provider>
    </>
  );
};

export default RoutingTaskManagement;
