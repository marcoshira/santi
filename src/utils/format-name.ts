export const formatName = (name: string): string => {
  const newName = name.replaceAll(' ', '-');
  const formattedName = newName.toLowerCase();
  return formattedName;
};
