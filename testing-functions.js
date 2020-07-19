function verifyCell(neighbours, alive) {
  if (alive != true) {
    if (neighbours == 2) {
      return true;
  }}
  if (neighbours > 1 && neighbours < 4) {
    return true;
  } else { return false; }
}

export { verifyCell };