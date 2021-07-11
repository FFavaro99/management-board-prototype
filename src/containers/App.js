import Layout from './Layout/Layout';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useEffect, useState} from 'react';

// DATA FLOW
// Boards are stored in App: Boards: [Board { title: string, id: number }]
// Lanes and tickets are stored in Board: Lane { title: string, id: number } Ticket { title: string, description: string, id: number }

let testBoards = [
  {
    id: 0,
    title: 'first board',
    lanes: [
      {
        title: 'first lane',
        id: 0,
        tickets: [
        ]
    }
    ]
  },
  {
    id: 1,
    title: 'second board'
  },
  {
    id: 2,
    title: 'third board'
  }
];
const ls = window.localStorage;

function App() {

  const [boards, setBoards] = useState([]);

  useEffect(()=>{
    //Initial load
    //1. check if there are any existing boards in local storage.
    const boards = ls.getItem('mbpBoardsData');
    //2. if there are, save them in state.
    if (boards) {
      setBoards(boards);
    }
    else {
      setBoards(testBoards);
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path='/' render={()=>{return <Layout boardIdParam={false} boards={boards}/>}}/>
        <Route exact path='/:boardId' render={()=>{return <Layout boardIdParam boards={boards}/>}}/>
      </Switch>
    </Router>
  );
}

export default App;
