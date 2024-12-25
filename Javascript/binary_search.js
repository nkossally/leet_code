while (lowerBound <= upperBound) {
  let mid = Math.ceil((lowerBound + upperBound) / 2);

  const works = trySpeed(mid);
  if (works) {
    upperBound = mid - 1;
  } else {
    lowerBound = mid + 1;
  }
}
