function wordBreak(A, B) {
  // last index that can be segmented into words at i
  const indicesSet = new Set();
  const dict = new Set(B);

  const getCanSegment = (idx) => {
    if (dict.has(A.slice(0, idx + 1))) return true;
    let result = false;
    indicesSet.forEach((idx2) => {
      if (dict.has(A.slice(idx2 + 1, idx + 1))) {
        result = true;
      }
    });
    return result;
  };

  for (let i = 0; i < A.length; i++) {
    const bool = getCanSegment(i);
    if (bool) {
      indicesSet.add(i);
    }
  }
  return indicesSet.has(A.length - 1) ? 1 : 0;
}
