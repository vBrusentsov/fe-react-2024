import type { FC } from 'react';

import styles from './pagination.module.css';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

// @ts-ignore
export const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageClick = (page: number) => {
        if (page !== currentPage) {
            onPageChange(page);
        }
    };

    const renderPageNumber = () => {
        const pageNumbers = [];
        let isShowLeftEllipsis = false;
        let isShowRightEllipsis = false;
        for (let index = 1; index <= totalPages; index++) {
            if (index === 1 || index === totalPages || (index >= currentPage - 1 && index <= currentPage + 1)) {
                pageNumbers.push(
                    <button
                        key={index}
                        className={`${styles.paginationButton} ${index === currentPage ? styles.paginationButtonActive : ''}`}
                        onClick={() => handlePageClick(index)}
                        disabled={index === currentPage}
                    >
                        {index}
                    </button>,
                );
            } else if (index < currentPage - 1 && !isShowLeftEllipsis) {
                pageNumbers.push(
                    <span key="left-ellipsis" className={styles.paginationEllipsis}>
                        ...
                    </span>,
                );
                isShowLeftEllipsis = true;
            } else if (index > currentPage + 1 && !isShowRightEllipsis) {
                pageNumbers.push(
                    <span key="right-ellipsis" className={styles.paginationEllipsis}>
                        ...
                    </span>,
                );
                isShowRightEllipsis = true;
            }
        }
        return pageNumbers;
    };

    return (
        <div className={styles.pagination}>
            <button className={styles.paginationButtonNav} onClick={handlePreviousPage} disabled={currentPage === 1}>
                {'<'}
            </button>
            {renderPageNumber()}
            <button className={styles.paginationButtonNav} onClick={handleNextPage} disabled={currentPage === totalPages}>
                {'>'}
            </button>
        </div>
    );
};
