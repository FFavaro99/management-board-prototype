import {Fragment, lazy, Suspense, useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import BoardsNav from '../../components/BoardsNav/BoardsNav';
import styles from './Layout.module.css';
import {BrowserRouter as Router, Route, Switch, useParams} from 'react-router-dom';

const Board = lazy(()=>import('../Board/Board'));

const Layout = ({boardIdParam, boards, addLane}) => {

    const [currentBoard, setCurrentBoard] = useState(null);
    const [boardIdState, setBoardIdState] = useState(-Infinity);
    const {boardId} = useParams();
    

    useEffect(()=>{
        //Initial load
        //1. check if there is the boardId params.
        //2. if there is, check if it corresponds to any board at all.
        //3. if it does, save the board as the current board, and pass it as props.
        if (boardIdParam){
            setBoardIdState(boardId);
            if (boards.length > 0){
                let currentBoard = boards.filter(board => +boardIdState === +board.id)?.[0];
                setCurrentBoard(currentBoard);
            }
        }
      },[boardId, boardIdState, boards]);

    return (
        <Fragment>
            { currentBoard ? <Header title={currentBoard.title}/> : <Header/>}
            <div className={styles.wrapper}>
                <BoardsNav boards={boards} currentBoard={currentBoard}/>
                <main>
                  <Suspense fallback={<div>Loading...</div>}>
                    { currentBoard ? <Board currentBoard={currentBoard} addLane={addLane}/> : null }
                  </Suspense>
                </main>
              </div>
        </Fragment>
    );
}

export default Layout;