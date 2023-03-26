export function VievPages(
  pages: number[],
  currentPage: number,
  totalCount: number
) {
  let dispPages: number[] = [];
  if (pages.length > 10) {
    if (currentPage > 5) {
      for (let i = currentPage - 4; i <= currentPage + 5; i++) {
        dispPages.push(i);
        if (i === totalCount) break;
      }
      return dispPages;
    } else {
      for (let i = 1; i <= 10; i++) {
        dispPages.push(i);
        if (i === totalCount) break;
      }
      return dispPages;
    }
  } else {
    for (let i = 1; i <= pages.length; i++) {
      dispPages.push(i);
    }
    return dispPages;
  }
}
