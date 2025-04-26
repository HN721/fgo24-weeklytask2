function divideAndSort(number) {
  const str = number.toString();

  const parts = str.split("0");

  const sortedParts = parts.map((part) =>
    part
      .split("")
      .sort((a, b) => a - b)
      .join("")
  );

  const result = sortedParts.join("");

  return Number(result);
}

console.log(divideAndSort(5956560159466056));
