import type { ChangeEvent, FC, FormEvent } from 'react';
import { useState } from 'react';
import React from 'react';

import searchIcon from '../../assets/LensIcon.svg';
import { Button } from '../button/Button.component.tsx';

import styles from './search-bar.module.css';

interface SearchBarProps {
    onSearchChange: (search: string) => void;
    onCategoryChange: (category: string) => void;
    onSortChange: (sortBy: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ onCategoryChange, onSortChange, onSearchChange }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('');

    const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearchChange(searchTerm);
    };

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        onCategoryChange(category);
    };

    return (
        <div className={styles.filterPanelContainer}>
            <form className={styles.searchBar} action="#" onSubmit={handleSearchSubmit}>
                <input
                    className={styles.searchBarInput}
                    placeholder="Search..."
                    autoComplete="off"
                    value={searchTerm}
                    onChange={handleSearchInputChange}
                />
                <button className={styles.searchBarButton} type={'submit'}>
                    <img className={styles.searchBarImage} src={searchIcon} alt="Search Icon" />
                </button>
            </form>
            <div className={styles.sortFilterContainer}>
                <div className={styles.categoriesContainer}>
                    <Button
                        variant="tertiary"
                        isActive={activeCategory === 'Electronics'}
                        onClick={() => handleCategoryChange('Electronics')}
                    >
                        Electronics
                    </Button>
                    <Button variant="tertiary" isActive={activeCategory === 'Shoes'} onClick={() => handleCategoryChange('Shoes')}>
                        Shoes
                    </Button>
                    <Button variant="tertiary" isActive={activeCategory === 'Clothes'} onClick={() => handleCategoryChange('Clothes')}>
                        Clothes
                    </Button>
                </div>
                <div className={styles.sortFilter}>
                    <p className={styles.sortFilterParagraph}>Sort by:</p>
                    {/* eslint-disable-next-line unicorn/prevent-abbreviations */}
                    <select className={styles.sortFilterList} onChange={(e) => onSortChange(e.target.value)}>
                        <option value="select">Select</option>
                        <option value="Price (High - Low)">Price (High - Low)</option>
                        <option value="Price (Low - High)">Price (Low- High)</option>
                        <option value="Newest">Newest</option>
                        <option value="Oldest">Oldest</option>
                    </select>
                </div>
            </div>
        </div>
    );
};
