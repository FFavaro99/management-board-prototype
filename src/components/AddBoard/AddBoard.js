import styles from './AddBoard.module.css';
import {Fragment, useRef} from 'react';

const AddBoard = ({addBoard}) => {
    const nameInput = useRef(null);
    return (
        <Fragment>
            <input 
                type="text" 
                placeholder="Insert board name*" 
                ref={nameInput}
                className={styles.input}></input>
            <button 
                className={styles.addBoardBtn} 
                onClick={()=>
                    {
                        const title = nameInput.current.value;
                        nameInput.current.value = null;
                        return addBoard(title);
                    }}
                >Add a new board</button>
        </Fragment>
    );
}

export default AddBoard;