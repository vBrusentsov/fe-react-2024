import type { FC } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

import { Pagination } from '@/components/pagination/Pagination.component.tsx';
import { ProductCard } from '@/components/productsList/Product-card.component.tsx';
import { SearchBar } from '@/components/search-bar/Search-bar.component.tsx';
import type { ProductsInterface } from '@/interface/product-interface.ts';
import type { ProductListComponentPropsInterface } from '@/interface/product-list-component-props.interface.ts';

import styles from './product-list.module.css';

export const ProductsList: FC<ProductListComponentPropsInterface> = ({ products }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortBy, setSortBy] = useState<string>('');

    const productPerPage: number = 8;

    const handleSearchChange = (term: string): void => {
        setSearchTerm(term);
        setCurrentPage(1);
    };

    const handleCategoryChange = (category: string): void => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const handleSortChange = (sort: string): void => {
        setSortBy(sort);
        setCurrentPage(1);
    };

    const filteredProducts = useMemo(
        () =>
            products
                .filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
                .filter((product) => (selectedCategory ? product.category.name === selectedCategory : true))
                .sort((a, b) => {
                    if (sortBy === 'Price (High - Low)') return b.price - a.price;
                    if (sortBy === 'Price (Low - High)') return a.price - b.price;
                    if (sortBy === 'Newest') return new Date(b.creationAt).getTime() - new Date(a.creationAt).getTime();
                    if (sortBy === 'Oldest') return new Date(a.creationAt).getTime() - new Date(b.creationAt).getTime();
                    return 0;
                }),
        [products, searchTerm, selectedCategory, sortBy],
    );

    const paginatedProducts = useMemo(() => {
        const startIndex: number = (currentPage - 1) * productPerPage;
        const endIndex: number = startIndex + productPerPage;
        return filteredProducts.slice(startIndex, endIndex);
    }, [filteredProducts, currentPage, productPerPage]);

    const handlePageChange = (page: number): void => {
        setCurrentPage(page);
    };

    const totalPages = useMemo(() => Math.ceil(filteredProducts.length / productPerPage), [filteredProducts, productPerPage]);

    return (
        <>
            <SearchBar onCategoryChange={handleCategoryChange} onSortChange={handleSortChange} onSearchChange={handleSearchChange} />
            <div className={styles.mainCard}>
                <ul className={styles.cardContainer}>
                    {paginatedProducts.map((product: ProductsInterface) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </ul>
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </>
    );
};
