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
    title: 'second board',
    lanes: []
  },
  {
    id: 2,
    title: 'third board',
    lanes: []
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

  const addLane = (boardId) => {
    let laneId = Math.floor(Math.random() * 1000 + Math.random() * 100 + Math.random() * 10);
    let currentBoards = [...boards];
    let newBoards = currentBoards.map(board => {
      if (+board.id === +boardId) {
        board.lanes.push({title: "New Lane", id: laneId});
        return board;
      }
      return board;
    });
    setBoards(newBoards);
  }

  return (
    <Router>
      <Switch>
        <Route exact path='/' render={()=>{return <Layout boardIdParam={false} boards={boards}/>}}/>
        <Route exact path='/:boardId' render={()=>{return <Layout boardIdParam boards={boards} addLane={addLane}/>}}/>
      </Switch>
    </Router>
  );
}

export default App;
