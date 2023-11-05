//In progress
let allNums;

var numMusicPlaylists = function(N, L, K) {
  if (N === L) {
    return factorial(N);
  }
  allNums = [];
  for (let i = 1; i <= N; i++) {
    allNums.push(i);
  }
  let playlistStart = allNums.slice(0, K);
  return choose(N, K) * getPlaylists([playlistStart], N, L, K).length;
};

getPlaylists = function(playlists, N, L, K) {
  if (playlists[0].length === L) {
    return playlists;
  }
  let newPlaylists = [];
  for (i = 0; i < playlists.length; i++) {
    let possibilities = getPossibilities(playlists[i], N, L, K);
    for (j = 0; j < possibilities.length; j++) {
      let newPlaylist = playlists[i].slice(0);
      newPlaylist.push(possibilities[j]);
      newPlaylists.push(newPlaylist);
    }
  }
  return getPlaylists(newPlaylists, N, L, K);
};

getPossibilities = function(arr, N, L, K) {
  let possibilities = allNums.slice(0);
  let unused = allNums.slice(0);
  for (let m = 0; m < arr.length; m++) {
    let idx1 = unused.indexOf(arr[m]);
    if (idx1 !== -1) {
      unused.splice(idx1, 1);
    }
    if (m >= arr.length - K) {
      let idx2 = possibilities.indexOf(arr[m]);
      possibilities.splice(idx2, 1);
    }
  }
  if (unused.length === L - arr.length) {
    return unused;
  }
  return possibilities;
};

factorial = function(num) {
  result = 1;
  while (num > 0) {
    result *= num;
    num -= 1;
  }
  return result;
};

choose = function(n, k) {
  return factorial(n) / (factorial(n - k) * factorial(k));
};
