export const TotalPageCount = (count: number) => {
  const totalPage: number[] = [];
  for (let i = 1; i <= count; i++) {
    totalPage.push(i);
  }
  return totalPage;
};
