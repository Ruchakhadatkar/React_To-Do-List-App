import React, { useState } from "react";
import "./Todolist.css";
import { AiFillDelete } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";

const Todolist = () => {
  const [input, setInput] = useState("");
  const [arr, setArr] = useState([]);
  const [temp, setTemp] = useState({});

  const handleClick = () => {
    if (!input) {
      return;
    } else if (Object.keys(temp).length === 0) {
      setArr([...arr, { input, id: new Date().getTime() }]);
    } else {
      const index = arr.findIndex((item) => item.id === temp.id);
      arr[index] = { id: temp.id, input: input };
      setTemp({});
    }
    setInput("");
  };

  const handleDelete = (id) => {
    const newArr = arr.filter((task) => {
      return task.id !== id;
    });
    setArr(newArr);
  };

  const handleEdit = (task) => {
    setInput(task.input);
    setTemp(task);
  };

  return (
    <div className="mainApp">
      <div className="container">
        <h1 className="heading">To-Do-List App</h1>
        <div className="input">
          <input
            value={input}
            type="text"
            placeholder="Enter Task..."
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button className="addBtn" onClick={handleClick}>
            +
          </button>
        </div>
        <div className="tasksEnter">
          {arr.map((task, i) => {
            return (
              <div className="task" key={i}>
                <p>{task.input}</p>
                <button
                  className="delete"
                  onClick={() => {
                    handleDelete(task.id);
                  }}
                >
                  <AiFillDelete />
                </button>
                <button
                  className="edit"
                  onClick={() => {
                    handleEdit(task);
                  }}
                >
                  <RiPencilFill />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todolist;
