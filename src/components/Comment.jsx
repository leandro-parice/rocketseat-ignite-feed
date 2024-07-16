import avatar from '../assets/avatar.jpg';
import { LinkSimple, TrashSimple } from '@phosphor-icons/react';

export function Comment() {
	return (
		<div>
			<img src={avatar} />
			<div className="content">
				<header>
					<div className="name">
						<strong>Devon Lane (você)</strong>
						<time dateTime="2024-08-07 00:00:00" title="2024-08-07 00:00:00">
							Cerca de 2h
						</time>
					</div>
					<TrashSimple />
				</header>
				<div className="content">
					<p>Muito bom Devon, parabéns!! 👏👏</p>
				</div>
				<footer>
					<LinkSimple />
					Aplaudir <span>33</span>
				</footer>
			</div>
		</div>
	);
}
