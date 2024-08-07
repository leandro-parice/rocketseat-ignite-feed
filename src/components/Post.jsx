import styles from './Post.module.css';
import avatar from '../assets/avatar.jpg';
import { Comment } from './Comment';

export function Post() {
	return (
		<div className={styles.post}>
			<header>
				<div className={styles.profile}>
					<img src={avatar} />
					<div className={styles.name}>
						<strong>Leandro Parice</strong>
						<span>Developer</span>
					</div>
				</div>
				<time dateTime="2024-07-08 12:34" title="2024-07-08 12:34">
					Públicado há 1h
				</time>
			</header>
			<div className={styles.content}>
				Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um
				projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é
				DoctorCare 🚀 👉 jane.design/doctorcare #novoprojeto #nlw #rocketseat
			</div>
			<footer>
				<label>Deixe seu feedback</label>
				<textarea
					placeholder="Escreva um comentário..."
					defaultValue="Nossa, adorei!"
				/>
				<button>Publicar</button>
			</footer>
			<div className="comments">
				<Comment />
				<Comment />
				<Comment />
			</div>
		</div>
	);
}
