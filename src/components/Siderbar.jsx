import styles from './Siderbar.module.css';

import { PencilSimpleLine } from '@phosphor-icons/react';

import profileBackground from '../assets/profile-background.jpg';
import avatar from '../assets/avatar.jpg';

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img src={profileBackground} />

			<div className={styles.profile}>
				<img src={avatar} />
				<strong>Leandro Parice</strong>
				<span>Developer</span>
			</div>
			<footer>
				<a href="#">
					<PencilSimpleLine size={20} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	);
}
