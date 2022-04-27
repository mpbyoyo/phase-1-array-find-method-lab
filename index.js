// code your solution here
const superbowlWin = (arr) => {
  let wins = arr.find(elem => elem.result == 'W')
  return wins != undefined ? wins.year : undefined
}

