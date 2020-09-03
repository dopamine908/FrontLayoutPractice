export class Pagination {
    ParkingCollection;
    ParkingCollectionChunk;
    per_page = 4;
    total_page;
    current_page;
    previous_page;
    next_page;

    constructor(ParkingCollection) {
        this.ParkingCollection = ParkingCollection;
        this.setTotalPage();
        this.setCurrentPage(1);
        this.ParkingCollectionChunk = this.chunkPage();
    }

    setTotalPage() {
        this.total_page = Math.ceil(this.ParkingCollection.length / this.per_page);
    }

    setCurrentPage(page) {
        this.current_page = parseInt(page);
        this.setPreviousPage(this.current_page);
        this.setNextPage(this.current_page);
    }

    setCurrentPageToNextPage() {
        this.setCurrentPage(this.next_page);
    }

    setCurrentPageToPreviousPage() {
        this.setCurrentPage(this.previous_page);
    }

    setPreviousPage(this_page) {
        if (parseInt(this_page) === 1) {
            this.previous_page = this_page;
        } else {
            this.previous_page = parseInt(this_page) - 1;
        }
    }

    setNextPage(this_page) {
        if (parseInt(this_page) === this.total_page) {
            this.next_page = this_page;
        } else {
            this.next_page = parseInt(this_page) + 1;
        }
    }

    getCurrentPageData() {
        return this.ParkingCollectionChunk[this.current_page - 1];
    }

    chunkPage() {
        let chunked_arr = [];
        let index = 0;
        while (index < this.ParkingCollection.length) {
            chunked_arr.push(this.ParkingCollection.slice(index, this.per_page + index));
            index += this.per_page;
        }
        return chunked_arr;
    }
}
