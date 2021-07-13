import styles from './Ticket.module.css';

const Ticket = ({id, description, laneId}) => {
    return (
        <div draggable className={styles.wrapper}>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default Ticket;