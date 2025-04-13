import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Banner from './components/Banner';
import CoursePage from './components/CoursePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Banner />
        <main>
          <Routes>
            <Route path="/course/:courseId" element={<CoursePage />} />
            <Route
              path="/"
              element={<Navigate to="/course/design-2d-spring-2025" replace />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
