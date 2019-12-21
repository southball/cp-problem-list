export async function getAtcoderData(problemId, type) {
  problemId = problemId.toLowerCase();

  if (type === 'difficulty') {
    // Fetch difficulty from another API.
    const request = await fetch('https://kenkoooo.com/atcoder/resources/problem-models.json');
    const api = await request.json();

    // Difficulty smoothing function, taken from kenkoooo/AtCoderProblems.
    const clipDifficulty = (difficulty) =>
      Math.round(
        difficulty >= 400 ? difficulty : 400 / Math.exp(1.0 - difficulty / 400)
      );

    if (api[problemId]) {
      return clipDifficulty(api[problemId].difficulty).toFixed();
    } else {
      return '-';
    }
  } else {
    const request = await fetch('https://kenkoooo.com/atcoder/resources/merged-problems.json');
    const api = await request.json();

    for (const entry of api)
      if (entry.id === problemId) {
        switch (type) {
          case 'difficulty':
            return entry.predict ? entry.predict.toFixed() : '-';
          case 'name':
            // Remove the problem index before the title if possible.
            return entry.title ? entry.title.replace(/^[A-Z]. /, '') : '-';
          case 'url':
            return `https://atcoder.jp/contests/${entry.contest_id}/tasks/${entry.id}`;
          default:
            return '-';
        }
      }

    return '-';
  }
}
