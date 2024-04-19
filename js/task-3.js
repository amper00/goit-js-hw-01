function getElementWidth(content, padding, border) {
  const borderBox =
    Number.parseInt(content) +
    2 * Number.parseInt(padding) +
    2 * Number.parseInt(border);
  return borderBox;
}

console.log(getElementWidth("50px", "8px", "4px"));
