function verifyCell(neighbours, alive) {
  if ((alive === true && neighbours > 1 && neighbours < 4)
  || (alive === false && neighbours === 3)) {
    return true;
  }
  return false;
}

export { verifyCell };