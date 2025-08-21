import React from "react";
import ProjectScrollBar from "../UI/ProjectScrollBar";
import { Outlet } from "react-router-dom";

const TasksLayout: React.FC = () => {
    return (
        <main style={{ display: "flex", justifyContent: "flex-start", gap: "1rem", flex: 1, margin: "0px"}}>
            <ProjectScrollBar />
            <Outlet />
        </main>
    );
};

export default TasksLayout;
