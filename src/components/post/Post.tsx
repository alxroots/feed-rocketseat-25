import authorImg from '../../assets/authorImg.png';
import styles from './Post.module.css'
import { Comment } from '../comments/Comment';
import {Avatar} from "../avatar/Avatar.tsx";

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={authorImg} />
                    <div className={styles.authorInfo}>
                        <strong>Author Name</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="07 de Março às 17:42" dateTime="2025-03-07">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a> {' '}
                    <a href="#">#rocketseat </a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}