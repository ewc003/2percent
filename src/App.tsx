import './App.css';

// Layouts
import AppLayout from './components/layouts/AppLayout';
import TasksLayout from './components/layouts/TasksLayout';

// Pages
import CalendarPage from './components/pages/CalendarPage';
import HabitsPage from './components/pages/HabitsPage';
import LandingPage from './components/pages/LandingPage';
import TasksPage from './components/pages/TasksPage';

// Components
import Footer from './components/UI/common/footer/Footer';
import Header from "./components/UI/common/header/Header";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div id="app-root">
      <BrowserRouter>
        <Header label={"2Percent"}/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="webapp" element={<AppLayout />} >
          <Route path="tasks" element={<TasksLayout />}>
            <Route path="today" element={<TasksPage header="Today’s Tasks" filter="today" />} />
            <Route path="week" element={<TasksPage header="This Week’s Tasks" filter="week" />} />
            <Route path="backlog" element={<TasksPage header="Backlog" filter="all" />} />
            <Route index element={<Navigate to="today" replace />} />
          </Route>
              {/* // TODO ADD THIS BACK
              <Route path="list/:listId" element={<TaskListPage />} /> */}

            <Route path="calendar" element={<CalendarPage />} />
            <Route path="habits" element={<HabitsPage />} />

            <Route path="*" element={<Navigate to="/webapp/tasks/today" replace />} />
          </Route>

          {/* Redirect any missing pages to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
      <Footer label={"© 2025 2Percent. Created by ewc003."} />
    </div>
  );
};

export default App;
