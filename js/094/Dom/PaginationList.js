export class PaginationList {
    constructor() {
        this.PaginationList = document.querySelector('.pagination-list');
    }

    renderPaginationList(Pagination) {
        this.clearAllPaginationItem();
        this.PaginationList.appendChild(this.generatePreviousPaginationItem());
        for (let page = 1; page <= Pagination.total_page; page++) {
            this.PaginationList.appendChild(this.generatePaginationItemDom(page));
        }
        this.PaginationList.appendChild(this.generateNextPaginationItem());
    }

    generatePaginationItemDom(page) {
        let PaginationItem = document.createElement('li');
        PaginationItem.classList.add('pagination-item');

        let PaginationLink = document.createElement('a');
        PaginationLink.classList.add('pagination-link');
        PaginationLink.textContent = page;

        PaginationItem.appendChild(PaginationLink);
        return PaginationItem;
    }

    generatePreviousPaginationItem() {
        return this.generatePaginationItemDom('<< prev');
    }

    generateNextPaginationItem() {
        return this.generatePaginationItemDom('next >>');
    }

    clearAllPaginationItem() {
        this.PaginationList.innerHTML = '';
    }
}
