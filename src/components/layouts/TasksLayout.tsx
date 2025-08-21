import React from "react";
import ProjectScrollBar from "../UI/ProjectScrollBar";
import { Outlet } from "react-router-dom";
import TasksProvider from "../../context/TasksContext";

const TasksLayout: React.FC = () => {
    return (
        <TasksProvider>
            <main style={{ display: "flex", justifyContent: "flex-start", gap: "1rem", flex: 1, margin: "0px"}}>
                <ProjectScrollBar />
                <Outlet />
            </main>
        </TasksProvider>
    );
};

export default TasksLayout;
