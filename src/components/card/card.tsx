import { useState } from 'react';
import styles from './card.module.scss';

export function Card() {

    const [excluirComp, setExcluirComp] = useState(false)
    const [editarComp, setEditarComp] = useState(false)



    return (
        <>
            <div className={styles.card}>
                <div className={styles.imageFrame}>
                    <img src="images/icone.png" alt="" />
                </div>

                <span className={styles.line}>lorem ipsum dolor sit amater, consectetur adipiscing elit</span>

                <div className={styles.buttons}>


                    <button className={styles.actionButton}>

                        <span className={styles.buttonContent}>
                            <img style={{ marginRight: "8px" }} src="images/trash.png" alt="trash" />
                            Excluir
                        </span>

                    </button>

                    <span className={styles.verticalLine}></span>

                    <button className={styles.actionButton}>

                        <span className={styles.buttonContent}>
                            <img style={{ marginRight: "8px" }} src="images/edit.png" alt="edit" />
                            Editar
                        </span>

                    </button>
                </div>



            </div>
        </>
    )
}