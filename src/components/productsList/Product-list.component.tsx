import type { FC } from 'react';
import { useState } from 'react';

import { Pagination } from '@/components/pagination/pagination.component.tsx';
import { ProductCard } from '@/components/productsList/Product-card.component.tsx';
import { SearchBarComponent } from '@/components/search-bar/search-bar.component.tsx';
import type { ProductsInterface } from '@/interface/product-interface.ts';
import type { ProductListComponentPropsInterface } from '@/interface/product-list-component-props.interface.ts';

import styles from './product-list.module.css';

export const ProductsList: FC<ProductListComponentPropsInterface> = ({ products }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const productPerPage: number = 8;

    const totalPages = Math.ceil(products.length / productPerPage);

    const getCurrentProducts = () => {
        const startIndex: number = (currentPage - 1) * productPerPage;
        const endIndex: number = startIndex + productPerPage;
        return products.slice(startIndex, endIndex);
    };

    const handlePageChange = (page: number): void => {
        setCurrentPage(page);
    };

    return (
        <>
            <SearchBarComponent />
            <div className={styles.mainCard}>
                <ul className={styles.cardContainer}>
                    {getCurrentProducts().map((product: ProductsInterface) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </ul>
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </>
    );
};
