import React from 'react'

const Card = ({ task, ind, deleteTask }) => {

    const handleDelete = () => {
        deleteTask(ind)
        console.log(ind)
    }

    return (
        <div className="card-wrapper mb-5">
            <div className="border-line"></div>
            <h5 className="mb-3 p-4 pb-0">{task.taskname}</h5>
            <p className="px-4">{task.description}</p>
            <div className="footer-link p-4">
                <i className="far fa-edit me-2" style={{ "cursor": "pointer" }}></i>
                <i className="far fa-trash-alt" style={{ "cursor": "pointer" }} onClick={handleDelete}></i>
            </div>
        </div>
    )
}

export default Card
