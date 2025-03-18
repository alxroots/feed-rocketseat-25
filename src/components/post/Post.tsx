import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import styles from './Post.module.css';
import { Comment } from '../comments/Comment';
import { Avatar } from '../avatar/Avatar.tsx';

interface PostProps {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: {
    type: string;
    value: string;
  }[];
  publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState(['Da hora este post']);
  const [newComment, setNewComment] = useState('');

  const publishedAtFormatted = format(publishedAt, "dd 'de' MMMM 'às' HH:mm", {
    locale: ptBR,
  });
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.target.setCustomValidity('');
    setNewComment(e.target.value);
  };

  const handleDeleteComment = (comment: string) => {
    setComments(comments.filter((c) => c !== comment));
  };

  const handleInvalidInput = (e: InvalidEvent<HTMLTextAreaElement>) => {
    e.target.setCustomValidity('Este campo não pode estar vazio');
  };

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item, index) => {
          if (item.type === 'text') {
            return <p key={index}>{item.value}</p>;
          } else if (item.type === 'link') {
            return (
              <p>
                <a>{item.value}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newComment}
          onChange={handleCommentChange}
          onInvalid={handleInvalidInput}
          required
        />
        <footer>
          <button type="submit" disabled={newComment.length === 0}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={handleDeleteComment}
          />
        ))}
      </div>
    </article>
  );
}
