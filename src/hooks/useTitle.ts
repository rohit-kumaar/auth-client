type TTitle = (title: string) => string;

export const useTitle: TTitle = (title) => {
  return (document.title = title);
};
