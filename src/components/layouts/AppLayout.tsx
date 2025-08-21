import React from "react";
import Sidebar from "../UI/Sidebar";
import { Outlet } from "react-router-dom";
import { type Feature } from "../../interfaces/features";

// TODO: GET FEATURES FROM BACKEND
const features: Feature[] = [
    {
        path: 'tasks',
        label: 'Task',
        icon: 'pi pi-check-circle'
    },
    {
        path: 'calendar',
        label: 'Calendar View',
        icon: 'pi pi-calendar'
    },
    {
        path: 'habits',
        label: 'Habits',
        icon: 'pi pi-chart-line'
    },
]

const AppLayout: React.FC = () => {
    return (
        <main style={{ display: "flex", flex: 1 }}>
            <Sidebar features={features} />
            <Outlet />
        </main>
    );
};

export default AppLayout;
