import './App.css';
import StudentsList from './components/StudentsList'
import ProjectssList from './components/ProjectsList'
import MoviesList from './components/MoviesList'

function App() {
  return (
    <div className="App">
      <StudentsList />
      <ProjectssList />
      <MoviesList />
    </div>
  );
}

export default App;
