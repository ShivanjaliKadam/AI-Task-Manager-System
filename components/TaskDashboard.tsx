"use client"; // Required for state updates

import { useState, useEffect } from "react";

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

const TaskDashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Load tasks initially
  useEffect(() => {
    setTasks([
      { id: 1, name: "Complete AI Chat Integration", completed: false },
      { id: 2, name: "Setup JWT Authentication", completed: false },
      { id: 3, name: "Deploy on Vercel", completed: true },
    ]);
  }, []);

  // Toggle completion status
  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-bold">Task Dashboard</h2>
      <ul className="mt-2">
        {tasks.map(task => (
          <li
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className={`p-2 cursor-pointer ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {task.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskDashboard;
