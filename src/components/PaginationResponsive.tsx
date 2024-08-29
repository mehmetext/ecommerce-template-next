import React from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

interface Props {
  currentPage: number;
  totalPages: number;
  generateLink: (pageNumber: number) => string;
}

export default function PaginationResponsive({
  currentPage,
  totalPages,
  generateLink,
}: Props) {
  const renderPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 6) {
        for (let i = 1; i <= 7; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else if (currentPage >= totalPages - 5) {
        for (let i = 1; i <= 3; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        for (let i = totalPages - 6; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers.map((number, index) => (
      <PaginationItem
        className={cn({ "hidden md:block": number !== currentPage })}
        key={index}
      >
        {typeof number === "number" ? (
          <PaginationLink
            href={generateLink(number)}
            isActive={currentPage === number}
          >
            {number}
          </PaginationLink>
        ) : (
          <PaginationEllipsis />
        )}
      </PaginationItem>
    ));
  };

  return (
    <Pagination>
      <PaginationContent className="w-full">
        <PaginationItem>
          <PaginationPrevious
            href={generateLink(currentPage === 1 ? 1 : currentPage - 1)}
          />
        </PaginationItem>
        <div className="flex-1" />
        {renderPageNumbers()}
        <div className="flex-1" />
        <PaginationItem>
          <PaginationNext
            href={generateLink(
              currentPage === totalPages ? totalPages : currentPage + 1
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
