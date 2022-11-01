
import styles from './loading.module.scss';

export default function LoadingComponent() {

    return (
        <div className={styles.Overlay}>
            <div className={styles.gridStack}>
                <div className={styles.loadingLogoContent}>
                    <img src='images/carrinho.png' className={styles.loadingLogo} />
                </div>
            </div>
        </div >
    )
}