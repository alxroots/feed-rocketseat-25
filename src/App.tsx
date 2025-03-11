import {Header} from "./components/header/Header.tsx";
import {Sidebar} from "./components/sidebar/Sidebar.tsx";
import {Post} from "./components/post/Post.tsx";

import styles from './App.module.css'
import authorImg from "./assets/authorImg.png";
import authorImg2 from "./assets/authorImg2.png";

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: authorImg,
            name: 'Author Name',
            role: 'Web Developer'
        },
        content: [
            {type: 'text', value: 'Fala galeraa 👋'},
            {type: 'text', value: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            {type: 'link', value: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2025-03-07 17:42'),
    },
    {
        id: 2,
        author: {
            avatarUrl: authorImg2,
            name: 'Second Author',
            role: 'Software Engineer'
        },
        content: [
            {type: 'text', value: 'Olá, pessoal!'},
            {type: 'text', value: 'Fiquei feliz de concluir meu projeto de engenharia de software 🚀'},
            {type: 'link', value: 'jake.engineer/project'},
        ],
        publishedAt: new Date('2025-03-07 17:42'),
    }
]

function App() {

  return (
    <>
      <Header />
        <div className={styles.wrapper}>
            <Sidebar />
            <main>
                {posts.map(post => (
                    <Post
                        key={post.id}
                        author={post.author}
                        content={post.content}
                        publishedAt={post.publishedAt}
                    />
                ))}
            </main>
        </div>
    </>
  )
}

export default App
