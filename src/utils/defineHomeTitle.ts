export const defineHomeTitle = (starSelected: string) => {
  const defaultTitle = 'Hello';

  if (starSelected === '') {
    return defaultTitle;
  } else {
    return starSelected;
  }
};
