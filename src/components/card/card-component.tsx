import { useEffect } from 'react';
import { useCardContext } from '../../context/car';
import { ICar } from '../../interfaces/car';
import styles from './card-component.module.scss';


interface props {
    car: ICar
}

export function Card({ car }: props) {

    const { setIsOpenedCardDeletion,
        setIsOpenedCardCreation,
        setDeletionId,
        setCreationCardType
    } = useCardContext()



    return (
        <>
            <div className={styles.cardContainer}>

                <div className={styles.card}>

                    <div className={styles.imageFrame}>
                        <img src={car.Photo.Base64} alt="" />
                    </div>

                    <span className={styles.line}>{car.Name}</span>

                    <div className={styles.buttons}>

                        <button onClick={() => { setIsOpenedCardDeletion(true), setDeletionId(car.Id) }}>

                            <span>
                                <img style={{ marginRight: "8px" }} src="images/trash.png" alt="trash" />
                                Excluir
                            </span>

                        </button>

                        <span className={styles.verticalLine}></span>

                        <button onClick={() => { setIsOpenedCardCreation(true), setCreationCardType({ tipo: "Atualizar", car: car }) }}>

                            <span>
                                <img style={{ marginRight: "8px" }} src="images/edit.png" alt="edit" />
                                Editar
                            </span>

                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}