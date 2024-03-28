import { formatDateAgo } from '../../helpers/formatDateAgo';
import Image from '../Image/Image';

import styles from './NewsBanner.module.css';

const NewsBanner = ({ item }) => {
	return (
		<div className={styles.banner}>
			<Image image={item.image} />
			<h3 className={styles.title}>{item.title}</h3>
			<p className={styles.extra}>
				{formatDateAgo(item.published)} by {item.author}
			</p>
		</div>
	);
};
export default NewsBanner;
