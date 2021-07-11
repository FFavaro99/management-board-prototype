import styles from './BoardsNav.module.css';
import { Link } from 'react-router-dom';
import AddBoard from '../AddBoard/AddBoard';

const BoardsNav = ({boards, currentBoard, addBoard}) => {

    let content;
    if (boards) {
        content = boards.map(board => {
            const linkTarget = {
                pathname: `/${board.id}`,
                key: board.id,
                state: {
                  applied: true
                }
              };
            if (currentBoard && +board.id === +currentBoard.id){
                return (
                    <li key={board.id} className={`${styles.link} ${styles.activeLink}`}><Link to={linkTarget}>{board.title}</Link></li>
                );
            }
            return (
                <li key={board.id} className={styles.link}><Link to={linkTarget}>{board.title}</Link></li>
            );
        });
    }
    
    return (
        <nav className={styles.wrapper}>
            <h2 className={styles.title}>My Boards</h2>
            <ul>
                {content}
            </ul>
            <AddBoard addBoard={addBoard}/>
        </nav>
    )
}

export default BoardsNav;