import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import AddActivity from './components/AddActivity';
import Activity from './components/Activity';

function App() {
  return (
    <Router>
      <Flex minHeight="100vh">
        <Sidebar />
        <Routes>
          <Route path="/" element={<AddActivity />} />
          <Route path="/activity/:type/:id" element={<Activity />} />
        </Routes>
      </Flex>
    </Router>
  );
}

export default App;
