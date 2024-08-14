import "./index.css";

interface PaginationProps {
  limit: number,
  total: number,
  offset: number,
  setOffset: (offset: number) => void
}

export function Pagination({ limit, total, offset, setOffset }: PaginationProps) {
  const MAX_ITEMS = 5;
  const MAX_LEFT = (MAX_ITEMS - 1) / 2;

  const currentPage = offset ? (offset / limit) + 1 : 1;
  const availablePages = Math.ceil(total / limit);
  const firstBtn = Math.max(currentPage - MAX_LEFT, 1);

  const handlePageClick = (page: number) => {
    const newOffset = (page - 1) * limit;
    setOffset(newOffset);
  };

  return (
    <>
      <div className="pagination">
        <ul>
          {Array.from({ length: Math.min(MAX_ITEMS, availablePages) })
            .map((_, index) => {
              const page = index + firstBtn;
              return (
                <li key={page}>
                  <button
                    className={currentPage == page ? "active" : ""}
                    onClick={() => handlePageClick(page)}
                  >
                    {page}
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}
