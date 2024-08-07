import styles from './Comment.module.css';
import avatar from '../assets/avatar.jpg';
import { ThumbsUp, TrashSimple } from '@phosphor-icons/react';

export function Comment() {
	return (
		<div className={styles.comment}>
			<img src={avatar} />
			<div className={styles.commentBody}>
				<div className={styles.commentBodyMessage}>
					<header>
						<div>
							<strong>Devon Lane (você)</strong>
							<time dateTime="2024-08-07 00:00:00" title="2024-08-07 00:00:00">
								Cerca de 2h
							</time>
						</div>
						<button>
							<TrashSimple />
						</button>
					</header>
					<div>
						<p>Muito bom Devon, parabéns!! 👏👏</p>
					</div>
				</div>
				<footer>
					<button>
						<ThumbsUp />
					</button>
					<p>
						Aplaudir<span>33</span>
					</p>
				</footer>
			</div>
		</div>
	);
}
