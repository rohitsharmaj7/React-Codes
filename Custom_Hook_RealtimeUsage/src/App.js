import React, { useEffect, useState, useCallback } from 'react';
import useFetch from './hooks/use-task';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

function App() {

  const [tasks, setTasks] = useState([]);

  const httpData = useFetch()
  const {isLoading,error,sendRequest:fetchTasks} = httpData;

  useEffect(() => {
    
    const transformTasks = (taskObj) => {
      const loadedTasks = [];
      for (const taskKey in taskObj) {
        loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
      }
      setTasks(loadedTasks);
    }
    
    fetchTasks({url:'https://react-http-83816-default-rtdb.firebaseio.com/tasks.json'},transformTasks);

  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;