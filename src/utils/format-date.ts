export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const year = date
    .toLocaleString('en', {
      year: 'numeric',
    })
    .toString();

  const month = date
    .toLocaleString('en', {
      month: '2-digit',
    })
    .toString();

  const day = date
    .toLocaleString('en', {
      day: '2-digit',
    })
    .toString();

  return year + '-' + month + '-' + day;
};
