import React, { useState } from 'react'
import CreateTask from './CreateTask'
import Card from './Card'

const Todo = () => {
    const [modal, setModal] = useState(false);
    const [inputData, setInputData] = useState({
        taskname: '',
        description: ''
    })

    const [taskList, setTaskList] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(inputData)
        setInputData((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        });
    }

    const addTask = (e) => {

        setTaskList([...taskList, inputData])
        setInputData('')
        setModal(false)
    }


    const toggle = () => {
        setModal(!modal)
    }

    const deleteTask = (id) => {
        let updateList = taskList
        updateList.splice(id, 1)

        localStorage.setItem("tasklist", JSON.stringify(updateList))
        setTaskList(updateList)
    }


    return (
        <div>
            <div className='header'>
                <h2 className="mb-4">Todo Task</h2>
                <button className="btn btn-primary" onClick={() => setModal(true)}>Create Task</button>
            </div>
            <div className='todo-list'>
                {
                    taskList.map((task, ind) => {
                        return <Card key={ind} task={task} deleteTask={deleteTask} />
                    })
                }
            </div>
            <CreateTask toggle={toggle} modal={modal} inputData={inputData} handleChange={handleChange} addTask={addTask} />
        </div>
    )
}

export default Todo
