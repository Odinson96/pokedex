export function VievPages(pages, currentPage, totalCount) {
    var dispPages = [];
    if (pages.length > 10) {
        if (currentPage > 5) {
            for (var i = currentPage - 4; i <= currentPage + 5; i++) {
                dispPages.push(i);
                if (i === totalCount)
                    break;
            }
            return dispPages;
        }
        else {
            for (var i = 1; i <= 10; i++) {
                dispPages.push(i);
                if (i === totalCount)
                    break;
            }
            return dispPages;
        }
    }
    else {
        for (var i = 1; i <= pages.length; i++) {
            dispPages.push(i);
        }
        return dispPages;
    }
}
