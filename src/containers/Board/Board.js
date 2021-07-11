import styles from './Board.module.css';
import Lane from '../../components/Lane/Lane';

const Board = ({currentBoard}) => {
    return (
        <section className={styles.board}>
            {currentBoard.lanes?.map(
                lane => <Lane 
                    key={lane.id} 
                    tickets={lane.tickets} 
                    title={lane.title} 
                    id={lane.id}/>
            )}
        </section>
    );
}

export default Board;