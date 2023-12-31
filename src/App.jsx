import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full py-4 text-center sticky top-0 ">
        <h1 className="mb-0">TASK CRUD APP</h1>
      </div>
      <div className="w-full max-w-md mt-10 sm:w-auto sm:max-w-none">
        <TaskList />
      </div>
    </div>
  );
};

export default App;
