import {useState} from 'react'
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'
import { Comment } from '../comments/Comment';
import {Avatar} from "../avatar/Avatar.tsx";

interface PostProps {
    author: {
        avatarUrl: string;
        name: string;
        role: string;
    }
    content: {
        type: string;
        value: string;
    }[]
    publishedAt: Date;
}

export function Post({author, content, publishedAt}: PostProps) {
    const [comments, setComments] = useState(['Da hora este post'])

    const publishedAtFormatted = format(publishedAt, "dd 'de' MMMM 'às' HH:mm", {locale: ptBR})
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true})

    const handleCreateNewComment = (e: any) => {
        e.preventDefault()
        setComments([...comments, {content: e.target[0].value}])
    }
    console.log('comments', comments)
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

                <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map((item, index) => {
                    console.log('content', item)
                    if (item.type === 'text') {
                        return <p key={index}>{item.value}</p>
                    } else if (item.type === 'link') {
                        return <p><a>{item.value}</a></p>
                    }

                })}
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
                {comments.map((comment, index) => (
                    <Comment key={index} content={comment.content} />
                ))}
            </div>
        </article>
    )
}