import { PencilLine } from "phosphor-react";
import styles from './sidebar.module.css';
import image from '../../assets/cover.jpeg';
import profileImage from '../../assets/avatar.jpeg';


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={image} alt="cover" />

            <div className={styles.profile}>
                <img className={styles.avatar} src={profileImage} alt="avatar" />
                <strong>Alex Sousa</strong>
                <span>Frontend Engineer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar perfil
                </a>
            </footer>
        </aside>
    )
}