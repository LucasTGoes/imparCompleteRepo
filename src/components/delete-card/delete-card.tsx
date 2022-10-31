import styles from './delete-card.module.scss';
import { useCardContext } from '../../context/car';


export function DeleteCard() {
    const { setIsOpenedCardDeletion, deletionId, deleteCar } = useCardContext()

    return (
        <>
            <div onClick={() => setIsOpenedCardDeletion(false)} className={styles.overlay}></div>

            <div className={styles.container}>
                <button onClick={() => setIsOpenedCardDeletion(false)} className={styles.closeButton}>
                    <span>+</span>
                </button>
                <div className={styles.deleteCardBox}>
                    <div>
                        <img src="images/trash.svg" alt="delete-card-icon" />
                    </div>
                    <h1>Excluir</h1>
                    <h5>CERTEZA QUE DESEJA EXCLUIR?</h5>
                    <span></span>
                    <div className={styles.cardButtons}>
                        <button onClick={() => deleteCar(deletionId)}>Excluir</button>
                        <button onClick={() => setIsOpenedCardDeletion(false)} > Cancelar</button>
                    </div>
                </div>
            </div>

        </>

    )



}


