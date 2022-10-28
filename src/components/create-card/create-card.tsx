import styles from './create-card.module.scss';


export function CreateCard() {


    return (
        <>
            <div className={styles.overlay}>
                <div className={styles.createCardBox}>
                    <div>
                        <div className={styles.createCardTitle}>
                            <img src="images/criar-card.svg" alt="criar-card-icon" />
                            <span>  Criar Card </span>
                        </div>

                        <span className={styles.line}></span>

                        <div className={styles.createCardBoxBody}>
                            <div className={styles.createCardInputText}>
                                <label htmlFor="">DIGITE UM NOME PARA O CARD</label>
                                <input placeholder='Digite o título' type="text" />
                            </div>

                            <div className={styles.createCardInputFile}>
                                <label htmlFor="">INCLUA UMA IMAGEM PARA APARECER NO CARD</label>
                                <input disabled placeholder='Nenhum arquivo selecionado' type="text" />
                                <button>Escolher arquivo</button>
                            </div>

                            <span className={styles.line}></span>

                            <button>Criar card</button>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}