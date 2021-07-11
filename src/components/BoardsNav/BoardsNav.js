import styles from './BoardsNav.module.css';
import { Link } from 'react-router-dom';

const BoardsNav = ({boards, currentBoard}) => {

    let content;
    if (boards) {
        content = boards.map(board => {
            const linkTarget = {
                pathname: `/${board.id}`,
                key: Math.random(),
                state: {
                  applied: true
                }
              };
            if (currentBoard && +board.id === +currentBoard.id){
                return (
                    <li className={`${styles.link} ${styles.activeLink}`}><Link to={linkTarget}>{board.title}</Link></li>
                );
            }
            return (
                <li className={styles.link}><Link to={linkTarget}>{board.title}</Link></li>
            );
        });
    }
    
    return (
        <nav className={styles.wrapper}>
            <h2 className={styles.title}>My Boards</h2>
            <ul>
                {content}
            </ul>
        </nav>
    )
}

export default BoardsNav;