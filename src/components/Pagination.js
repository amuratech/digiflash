import React, { useState, useEffect } from 'react';

function Pagination(props) {
  const [pager, setPager] = useState({});
  const [items] = useState(props.items);
  const [initialPage] = useState(1);
  const [pageSize] = useState(10);

  useEffect(() => {
    setPage(initialPage)
  }, []);

  const setPage = (page) => {
    let newPager = getPager(items.length, page);
    let pageOfItems = items.slice(newPager.startIndex, newPager.endIndex + 1);

    setPager(newPager);
    props.onChangePage(pageOfItems);
  }

  const getPager = (totalItems, currentPage) => {
    let totalPages = Math.ceil(totalItems / pageSize);
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    let pages = [...Array(totalPages).keys()].map(i => i + 1);

    // display only three numbers in pagination
    let startPageIndex = currentPage - 2
    let endPageIndex = currentPage

    if (currentPage <= 2 ) {
      startPageIndex = 0;
      endPageIndex = 2;
    } else if ( currentPage >= totalPages - 1) {
      startPageIndex = totalPages - 3;
      endPageIndex = totalPages - 1;
    }

    pages = pages.slice(startPageIndex, endPageIndex + 1);

    return {
      currentPage: currentPage,
      totalPages: totalPages,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

  return (
    <nav aria-label="Page navigation example">
      {pager.pages === undefined ? (
        ''
      ) : (
        <ul className="pagination">
        <li className={ pager.currentPage === 1 ? 'disabled page-item' : 'page-item' }>
          <a href="#!" className="page-link" onClick={ () => setPage(1) }>First</a>
        </li>
        <li className={pager.currentPage === 1 ? 'disabled page-item' : 'page-item'}>
          <a href="#!" className="page-link" onClick={ () => setPage(pager.currentPage - 1) }>Previous</a>
        </li>

        { pager.pages.map((page, index) =>
          <li key={index} className={pager.currentPage === page ? 'active page-item' : 'page-item'}>
            <a href="#!" className="page-link" onClick={() => setPage(page)}>{page}</a>
          </li>
        ) }
        <li className={ pager.currentPage === pager.totalPages ? 'disabled page-item' : 'page-item' }>
          <a href="#!" className="page-link" onClick={() => setPage(pager.currentPage + 1)}>Next</a>
        </li>
        <li className={ pager.currentPage === pager.totalPages ? 'disabled page-item' : 'page-item' }>
          <a href="#!" className="page-link" onClick={() => setPage(pager.totalPages)}>Last</a>
        </li>
      </ul>
      )
      }

    </nav>
  );
}

export default Pagination;
