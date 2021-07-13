import styles from './Board.module.css';
import Lane from '../../components/Lane/Lane';
import AddLane from '../../components/AddLane/AddLane';

const Board = ({currentBoard, addLane, addTicket}) => {
    return (
        <section className={styles.board}>
            {currentBoard.lanes?.map(
                lane => <Lane 
                    key={lane.id} 
                    tickets={lane.tickets} 
                    title={lane.title} 
                    laneId={lane.id}
                    boardId={currentBoard.id}
                    addTicket={(addTicket)}/>
            )}
            <AddLane addLane={addLane} boardId={currentBoard.id}/>
        </section>
    );
}

export default Board;