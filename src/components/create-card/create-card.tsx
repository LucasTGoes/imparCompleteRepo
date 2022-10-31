import { useRef, useState } from 'react';
import { useCardContext } from '../../context/car';
import styles from './create-card.module.scss';


export function CreateCard() {


    const { setIsOpenedCardCreation, creationCardType } = useCardContext()
    const [newImagePath, setNewImagePath] = useState("")
    const [newImage, setNewImage] = useState("")

    const inputElement = useRef<HTMLInputElement>(null);

    const activateInput = () => {
        inputElement.current?.click()
    }

    function addNewImage(element) {
        if (!inputElement.current) return
        setNewImagePath(inputElement.current.value)

        let image = element.target.files[0]

        let reader = new FileReader();

        reader.onloadend = () => {
            setNewImage(reader.result.toString())
        }
        reader.readAsDataURL(image);
    }



    return (
        <>
            <div onClick={() => setIsOpenedCardCreation(false)} className={styles.overlay}></div>

            <div className={styles.createCardBox}>
                <div className={styles.createCardTitle}>
                    <img src="images/icone_criar.png" alt="criar-card-icon" />
                    <h3 style={{ marginLeft: "15px" }}>  {creationCardType.tipo} card </h3>
                </div>


                <div className={styles.createCardBoxBody}>
                    <span></span>
                    <div className={styles.createCardInputText}>
                        <label>DIGITE UM NOME PARA O CARD</label>
                        <input placeholder='Digite o título' type="text" />
                    </div>

                    <div className={styles.createCardInputFile}>
                        <label>INCLUA UMA IMAGEM PARA APARECER NO CARD</label>

                        <input disabled placeholder={newImagePath ? newImagePath : "Nenhum arquivo selecionado"} type="text" />
                        <button onClick={activateInput}> Escolher arquivo</button>
                        <input ref={inputElement} onChange={addNewImage} hidden type="file" />


                    </div>

                    <span></span>

                    <button className={styles.createCardButton}>{creationCardType.tipo} card</button>

                </div>
            </div>

        </>

    )
}