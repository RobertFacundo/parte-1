import './App.css'
import Home from './views/Home';

    {/* I didn't use React Router in this case because the project requirements didn't specify
        the need for a navigation bar (NavBar) or footer. If navigation between different views 
        or sections was required, I would have integrated React Router to manage the routes efficiently. */}

const App = () => {
  return (
    <Home />
  );
};

export default App;