import imgAuthor from '../../assets/authorImg.png';
import styles from './Comment.module.css';
import { HandsClapping, Trash } from 'phosphor-react';
import { Avatar } from '../avatar/Avatar.tsx';
import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (content: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [clap, setClap] = useState(0);
  const handleClickClapping = () => {
    console.log('clicou');
    setClap(clap + 1);
  };
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
            <button
              title="Deletar comentário"
              onClick={() => {
                onDeleteComment(content);
              }}
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleClickClapping}>
            <HandsClapping />
            Aplaudir <span>{clap}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
