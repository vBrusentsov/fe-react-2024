import searchIcon from '../../assets/LensIcon.svg';
import { Button } from '../button/Button.component.tsx';

import styles from './search-bar.module.css';

export const SearchBarComponent = () => (
    <div className={styles.filterPanelContainer}>
        <form className={styles.searchBar} action="#">
            <input className={styles.searchBarInput} placeholder="Search..." autoComplete="off" />
            <button className={styles.searchBarButton}>
                <img className={styles.searchBarImage} src={searchIcon} alt="Search Icon" />
            </button>
        </form>
        <div className={styles.sortFilterContainer}>
            <div className={styles.categoriesContainer}>
                <Button variant="tertiary">Electronics</Button>
                <Button variant="tertiary">Shoes</Button>
                <Button variant="tertiary">Clothes</Button>
            </div>
            <div className={styles.sortFilter}>
                <p className={styles.sortFilterParagraph}>Sort by:</p>
                <select className={styles.sortFilterList}>
                    <option>Price (High - Low)</option>
                    <option>Price (Low- High)</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                </select>
            </div>
        </div>
    </div>
);
