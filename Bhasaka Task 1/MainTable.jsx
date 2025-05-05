import React, { useContext } from "react";

import "./taskManagement.css";
import { globalVariable } from "./RoutingPage";
import { useNavigate } from "react-router-dom";

const Maintable = () => {

      const { tableTask, settable, task, setTask } = useContext(globalVariable);

      const nav=useNavigate();
    
  return (
    <>
      <div>
        {/* <h1>Hi i'm taskmanagement</h1> */}
        <div>
          <header className="taskManagementheader">
            <h2>TaskManagement</h2>
          </header>
          <section className="section1">
            <div className="section1div">
              <input type="text" placeholder="enter here to search" />
              <button onClick={() => {nav("/taskAdding");}}>AddTask</button>
            </div>
          </section>
          <section className="section2">
            <div className="section2div">
              <table border="2px">
                <thead>
                  <th>Name</th>
                  <th>Description</th>
                  <th>status</th>
                  <th>action</th>
                </thead>
                <tbody>
                    {
                        tableTask?.map((i)=> {
                            return(
                                <tr>
                                    <td>{i.name}</td>
                                    <td>{i.description}</td>
                                    <td>{i.status}</td>
                                    <td className="tdAction"><div className="div1task"><div><button onClick={() => nav("/taskAdding")}>Edit</button></div><div><button>Delete</button></div></div></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Maintable;
