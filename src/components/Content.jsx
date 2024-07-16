import { Sidebar } from './Siderbar';
import styles from './Content.module.css';
import { Feed } from './Feed';

export function Content() {
	return (
		<div className={styles.content}>
			<Sidebar />
			<Feed />
		</div>
	);
}
