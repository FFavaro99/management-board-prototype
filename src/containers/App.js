import Layout from './Layout/Layout';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useEffect, useState} from 'react';

// DATA FLOW
// Boards are stored in App: Boards: [Board { title: string, id: number }]
// Lanes and tickets are stored in Board: Lane { title: string, id: number } Ticket { title: string, description: string, id: number }

const ls = window.localStorage;

function App() {

  const [boards, setBoards] = useState([]);

  useEffect(()=>{
    //Initial load
    //1. check if there are any existing boards in local storage.
    const boards = ls.getItem('mbpBoardsData');
    //2. if there are, save them in state.
    if (boards) {
      console.log("retrieved from ls: ", boards);
      setBoards(JSON.parse(boards));
    }
  }, []);

  const addLane = (boardId) => {
    let laneId = Math.floor(Math.random()*100000000 + Math.random()*10000000 + Math.random()*1000000+ Math.random()*100000);
    let currentBoards = [...boards];
    let newBoards = currentBoards.map(board => {
      if (+board.id === +boardId) {
        board.lanes.push({title: "New Lane", id: laneId});
        return board;
      }
      return board;
    });
    setBoards(newBoards);
    ls.setItem('mbpBoardsData', JSON.stringify(newBoards));
  }

  const addBoard = boardTitle => {
    let newBoards = [...boards];
    newBoards.push({
      id: Math.floor(Math.random()*100000000 + Math.random()*10000000 + Math.random()*1000000+ Math.random()*10000),
      title: boardTitle,
      lanes: []
    });
    setBoards(newBoards);
    ls.setItem('mbpBoardsData', JSON.stringify(newBoards));
  }

  return (
    <Router>
      <Switch>
        <Route exact path='/' render={()=>{return <Layout boardIdParam={false} boards={boards} addBoard={addBoard}/>}}/>
        <Route exact path='/:boardId' render={()=>{return <Layout boardIdParam boards={boards} addLane={addLane} addBoard={addBoard}/>}}/>
      </Switch>
    </Router>
  );
}

export default App;