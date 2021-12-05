import styles from "./ConfirmAudioModal.module.css";

const ConfirmAudioModal = ({open, onClose, ...props}) => {


    return (
        <>
            {open &&
                <div className={styles.modal}>
                    <div className={styles.modalBody}>
                        <p>Внимание! На сайте присутствует музыка, не забудьте уменьшить громкость вашего устройства</p>
                        <button className={styles.acceptButton} onClick={onClose}>Понятно</button>
                    </div>
                </div>
            }
        </>
    );
}

export default ConfirmAudioModal;