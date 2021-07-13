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
        board.lanes.push({title: "New Lane", id: laneId, tickets: []});
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

  const addTicket = (ticketDescription, laneId, boardId) => {
    console.log(`Ticket to be added in board: ${boardId}, lane: ${laneId} with description ${ticketDescription}`);
    let ticketId = Math.floor(Math.random()*100000000 + Math.random()*10000000 + Math.random()*1000000+ Math.random()*10000);
    let newBoards = [...boards];
    newBoards = newBoards.map( board => {
      if (+board.id === +boardId){
        console.log(`board with id ${board.id} found`)
        board.lanes = board.lanes.map( lane => {
          if (+lane.id === +laneId){
            console.log(`lane with id ${lane.id} found`);
            lane.tickets.push({id: ticketId, description: ticketDescription});
          }
          return lane;
        });
        return board;
      }
      return board;
    });
    ls.setItem('mbpBoardsData', JSON.stringify(newBoards));
    setBoards(newBoards);
  }

  return (
    <Router>
      <Switch>
        <Route exact path='/' render={()=>{return <Layout boardIdParam={false} boards={boards} addBoard={addBoard}/>}}/>
        <Route exact path='/:boardId' render={()=>{return <Layout boardIdParam boards={boards} addLane={addLane} addBoard={addBoard} addTicket={addTicket}/>}}/>
      </Switch>
    </Router>
  );
}

export default App;