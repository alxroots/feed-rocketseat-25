import imgAuthor from '../../assets/authorImg.png';
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../avatar/Avatar.tsx';

interface CommentProps {
  content: string;
}

export function Comment({ content }: CommentProps) {
  console.log('content', content);
  return (
    <div className={styles.comment}>
      <Avatar src={imgAuthor} hasBorder={false} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Alex Sousa</strong>
              <time title="11 de Maio às 07:37" dateTime="2022-05-11 07:37:45">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
