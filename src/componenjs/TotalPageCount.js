export var TotalPageCount = function (count) {
    var totalPage = [];
    for (var i = 1; i <= count; i++) {
        totalPage.push(i);
    }
    return totalPage;
};
