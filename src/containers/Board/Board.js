import styles from './Board.module.css';
import Lane from '../../components/Lane/Lane';
import AddLane from '../../components/AddLane/AddLane';

const Board = ({currentBoard, addLane}) => {
    return (
        <section className={styles.board}>
            {currentBoard.lanes?.map(
                lane => <Lane 
                    key={lane.id} 
                    tickets={lane.tickets} 
                    title={lane.title} 
                    id={lane.id}/>
            )}
            <AddLane addLane={addLane} boardId={currentBoard.id}/>
        </section>
    );
}

export default Board;