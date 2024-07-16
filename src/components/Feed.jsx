import { Post } from './Post';

import styles from './Feed.module.css';

export function Feed() {
	return (
		<div className={styles.feed}>
			<Post />
			<Post />
			<Post />
			<Post />
		</div>
	);
}
