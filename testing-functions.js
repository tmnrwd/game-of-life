function verifyCell(neighbours){
  if (neighbours > 1 && neighbours < 4) {
    return true;
  } else {return false;}
}

export {verifyCell};