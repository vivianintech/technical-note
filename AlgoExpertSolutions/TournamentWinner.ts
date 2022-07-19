// competitions = [["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]];
// results = [0, 0, 1] = [away won, away won, home won]
// [homeTeam, awayTeam]

// Method 1

export function tournamentWinner1(
  competitions: string[][],
  results: number[],
): string {
  const compLen = competitions.length;
  let resultObj: { [key: string]: number } = {};

  for (let i = 0; i < compLen; i++) {
    for (let j = 0; j < 2; j++) {
      const teamName = competitions[i][j];

      if (!(teamName in resultObj)) {
        resultObj[teamName] = 0;
      }

      const homeTeam = competitions[i][0];
      const awayTeam = competitions[i][1];
      const homeTeamWon = teamName === homeTeam && results[i] === 1;
      const awayTeamWon = teamName === awayTeam && results[i] === 0;

      if (homeTeamWon || awayTeamWon) {
        resultObj[teamName] += 3;
      }
    }
  }

  const wonTeam = Object.keys(resultObj).reduce(
    (a: string, b: string): string => {
      return resultObj[a] > resultObj[b] ? a : b;
    },
  );

  return wonTeam;
}

// Method 2

export function tournamentWinner2(
  competitions: string[][],
  results: number[],
): string {
  let mapResults = new Map<string, number>();
  let wonTeam = "";
  let curIdx = 0;

  for (let competition of competitions) {
    wonTeam = results[curIdx] === 0 ? competition[1] : competition[0];

    if (mapResults.has(wonTeam)) {
      mapResults.set(wonTeam, mapResults.get(wonTeam)! + 3);
    } else mapResults.set(wonTeam, 3);

    curIdx += 1;
  }

  mapResults = new Map<string, number>(
    [...mapResults].sort((a, b) => b[1] - a[1]),
  );

  return mapResults.keys().next().value;
}
