export default function useButtonStatus() {
  const isInputEmpty = (id: string) => id.trim() === '';
  const isArrayEmpty = (listItems: number) => listItems <= 0;

  return { isInputEmpty, isArrayEmpty };
}
