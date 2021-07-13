import styles from './Lane.module.css';
import {AiOutlineEdit, AiOutlinePlusCircle} from 'react-icons/ai';
import Ticket from "../Ticket/Ticket.js";
import {useRef} from 'react';

const Lane = ({title, tickets, addTicket, laneId, boardId}) => {

    const ticketDescription = useRef(null);

    let renderTickets = () => {
        if (tickets) {
            let content = tickets.map(ticket => (
                <li key={ticket.id}>
                    <Ticket {...ticket}/>
                </li>
            ));
            return content;
        }
    }

    return(
        <div className={styles.lane} draggable>
            <div className={styles.title}>
                <h3 className={styles.titleTypography}>{title}</h3>
                <AiOutlineEdit color='#fff' className={styles.editIcon}/>
            </div>
            <section className="content">
                <ul className={styles.ticketsList}>
                    {renderTickets()}
                </ul>
            </section>
            <form className={styles.addTicket}>
                <input type="text" className={styles.input} placeholder="Add new ticket*" ref={ticketDescription}></input>
                <AiOutlinePlusCircle 
                    color="#666" 
                    className={styles.addIcon} 
                    onClick={() => {
                        let description = ticketDescription.current.value;
                        if (description){
                            ticketDescription.current.value = null;
                            return addTicket(description, laneId, boardId);
                        }
                    }}
                />
            </form>
        </div>  
    );
    
}

export default Lane;