import styles from './header.module.scss';

export function Header() {
    return (
        <>
            <div className={styles.headerTop}>
                <img src="images/logo-teste.svg" alt="logo-teste" />
            </div>
            <div className={styles.headerSearchBackgroundDiv}>
                <img className={styles.headerSearchBackground} src="images/fundo-busca.png" alt="fundo-busca" />
            </div>
            <div className={styles.inputSearchDiv}>
                <input className={styles.inputSearch} placeholder="Digite aqui a sua busca..." type="text" name="" id="" />
                <img className={styles.lupa} src="images/lupa.png" alt="lupa" />
            </div>
        </>
    )
}

