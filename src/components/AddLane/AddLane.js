import styles from './AddLane.module.css';

const AddLane = ({addLane, boardId}) => {
    return (
            <button className={styles.addButton} onClick={()=>addLane(boardId)}>Add a new lane</button>
    );
}

export default AddLane;