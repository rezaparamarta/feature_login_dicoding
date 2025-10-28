let scoreA = 11;
let scoreB = 23;

function updateScore(team, change) {
  if (team === 'A') {
    scoreA += change;
    if (scoreA < 0) scoreA = 0;
    document.getElementById('scoreA').textContent = scoreA;
  } else {
    scoreB += change;
    if (scoreB < 0) scoreB = 0;
    document.getElementById('scoreB').textContent = scoreB;
  }
}

function changeName(team) {
  const newName = prompt("Enter new team name:");
  if (!newName) return;
  
  if (team === 'A') {
    document.getElementById('teamAName').textContent = newName;
  } else {
    document.getElementById('teamBName').textContent = newName;
  }
}
