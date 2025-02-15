import React from "react";
import CustomButton from "./CustomButton";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(currentPage + 1, totalPages - 1);
        i++
      ) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2 text-gray-3">
      <CustomButton
        title="Prev"
        handleClick={handlePrevClick}
        isDisabled={currentPage === 1}
        containerStyles={`px-4 py-2 rounded-full border border-3 border-gray-3 text-gray-3 text-[14px] disabled:opacity-50 ${
          currentPage === 1 ? "cursor-not-allowed" : ""
        }`}
      />

      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span key={`ellipsis-${index}`} className="text-gray-3">
            ...
          </span>
        ) : (
          <CustomButton
            key={page}
            text={page.toString()}
            handleClick={() => onPageChange(Number(page))}
            containerStyles={`p-4 text-gray-3 text-[14px] ${
              page === currentPage
                ? "border border-3 border-gray-3 rounded-full"
                : "border-none"
            }`}
          />
        )
      )}

      <CustomButton
        title="Next"
        handleClick={handleNextClick}
        isDisabled={currentPage === totalPages}
        containerStyles={`px-4 py-2 rounded-full border border-3 border-gray-3 text-gray-3 text-[14px] disabled:opacity-50 ${
          currentPage === totalPages ? "cursor-not-allowed" : ""
        }`}
      />
    </div>
  );
};

export default Pagination;
