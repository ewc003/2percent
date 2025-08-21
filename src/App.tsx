import './App.css';

// Layouts
import AppLayout from './components/layouts/AppLayout';
import TasksLayout from './components/layouts/TasksLayout';

// Pages
import BacklogPage from './components/pages/BacklogPage';
import CalendarPage from './components/pages/CalendarPage';
import HabitsPage from './components/pages/HabitsPage';
import LandingPage from './components/pages/LandingPage';
import TaskListPage from './components/pages/TaskListPage';
import TodayPage from './components/pages/TodayPage';
import WeekPage from './components/pages/WeekPage';

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
            <Route index element={<Navigate to="today" replace />} />
            {/* Task routes */}
            <Route path="tasks" element={<TasksLayout />} >
              <Route index element={<Navigate to="today" replace />} />
              <Route path="today" element={<TodayPage />} />
              <Route path="week" element={<WeekPage />} />
              <Route path="backlog" element={<BacklogPage />} />
              <Route path="list/:listId" element={<TaskListPage />} />
            </Route>

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
