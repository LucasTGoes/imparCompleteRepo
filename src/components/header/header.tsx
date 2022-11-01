import { useState } from 'react';
import { useCardContext } from '../../context/car';
import styles from './header.module.scss';

export function Header() {

    const { searchCarByName, isSearching, getCarsPaginated, setIsLoading } = useCardContext()
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
                {
                    !isSearching ?
                        <img onClick={() => {
                            if (!inputValue) return
                            searchCarByName(inputValue, 0, 12),
                                setIsLoading(true)
                        }} src="images/lupa.png" alt="lupa" />
                        : <img onClick={() => { getCarsPaginated(0, 12), setIsLoading(true) }} src="images/close.png" alt="close" />
                }
            </div>
        </>
    )
}

