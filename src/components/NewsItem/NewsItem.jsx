import { formatDateAgo } from '../../helpers/formatDateAgo';

import styles from './NewsItem.module.css';

const NewsItem = ({ item }) => {
	return (
		<li className={styles.item}>
			<div
				className={styles.wrapper}
				style={{ backgroundImage: `url(${item.image})` }}
			/>
			<div className={styles.info}>
				<h3 className={styles.title}>{item.title}</h3>
				<p className={styles.extra}>
					{formatDateAgo(item.published)} by {item.author}
				</p>
			</div>
		</li>
	);
};
export default NewsItem;
