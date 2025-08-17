'use client'; // This line is essential for using useState
import { useState } from 'react';

export function usePagination<T>(items: T[], itemsPerPage: number = 4) {
    const [currentPage, setCurrentPage] = useState(1);
    
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    
    return {
        currentItems,
        currentPage,
        totalPages,
        paginate,
        hasNext: currentPage < totalPages,
        hasPrevious: currentPage > 1,
        nextPage: () => setCurrentPage(old => Math.min(old + 1, totalPages)),
        previousPage: () => setCurrentPage(old => Math.max(old - 1, 1))
    };
}