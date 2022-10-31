import { useState } from 'react';
import { useCardContext } from '../../context/car';
import styles from './header.module.scss';

export function Header() {

    const { searchCarByName } = useCardContext()
    const [inputValue, setInputValue] = useState("")

    return (
        <>
            <div className={styles.headerTop}>
                <img src="images/logo-teste.svg" alt="logo-teste" />
            </div>
            <div className={styles.headerSearchBackground}>
                <img src="images/fundo-busca.png" alt="fundo-busca" />
            </div>
            <div className={styles.inputSearch}>
                <input placeholder="Digite aqui a sua busca..." onChange={e => setInputValue(e.target.value)} type="text" />
                <img onClick={() => searchCarByName(inputValue)} src="images/lupa.png" alt="lupa" />
            </div>
        </>
    )
}

