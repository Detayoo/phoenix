import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

export const Pagination = ({
  array,
  currentItems,
  setCurrentItems,
  itemOffset,
  setItemOffset,
  itemsPerPage,
}) => {
  const endOffset = itemOffset + itemsPerPage;
  const [pageCount, setPageCount] = useState(0);
  const startOfDisplay = itemOffset + 1;
  const endOfDisplay = itemOffset + currentItems?.length;

  useEffect(() => {
    setCurrentItems(array?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(array.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % array?.length;
    setItemOffset(newOffset);
  };
  return (
    <div className="h-14 flex items-center justify-between border-t mt-2 pl-6 pr-10">
      <p className="text-sm text-black/80">
        Showing {startOfDisplay} to {endOfDisplay} of {array?.length} entries
      </p>
      <ReactPaginate
        className="flex items-center gap-x-4 text-[0.8rem]"
        activeClassName="flex items-center justify-center bg-primary-red text-white h-7 w-6 rounded-[2px]"
        disabledClassName="text-black/40"
        breakLabel="..."
        nextLabel={`> Next`}
        nextClassName="text-base flex flex-col gap-x-3"
        nextLinkClassName=""
        previousClassName="text-base"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Previous  < "
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
