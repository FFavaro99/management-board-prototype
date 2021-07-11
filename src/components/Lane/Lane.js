import styles from './Lane.module.css';
import {AiOutlineEdit, AiOutlinePlusCircle} from 'react-icons/ai';

const Lane = ({title}) => {

    return(
        <div className={styles.lane}>
            <div className={styles.title}>
                <h3 className={styles.titleTypography}>{title}</h3>
                <AiOutlineEdit color='#fff' className={styles.editIcon}/>
            </div>
            <section className="content">
                <ul>

                </ul>
            </section>
            <form className={styles.addTicket}>
                <input type="text" className={styles.input} placeholder="Add new ticket*"></input>
                <AiOutlinePlusCircle color="#666" className={styles.addIcon}/>
            </form>
        </div>  
    );
    
}

export default Lane;