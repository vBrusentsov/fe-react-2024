import type { FC } from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

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

    return (
        <div>
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                {'<'}
            </button>
            <span>{` Page ${currentPage} of ${totalPages} `}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                {'>'}
            </button>
        </div>
    );
};
