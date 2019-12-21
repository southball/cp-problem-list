const CODEFORCES_CACHE_ID = 'cp-problems.codeforces-cache';

export async function getCodeforcesData(problemId, type) {
  problemId = problemId.toUpperCase();

  let api;

  if (sessionStorage.getItem(CODEFORCES_CACHE_ID) === null) {
    const request = await fetch('https://codeforces.com/api/problemset.problems');
    const response = await request.text();
    api = JSON.parse(response);
    sessionStorage.setItem(CODEFORCES_CACHE_ID, response);
  } else {
    api = JSON.parse(sessionStorage.getItem(CODEFORCES_CACHE_ID));
  }

  for (const entry of api.result.problems) {
    if (problemId === entry.contestId.toString() + entry.index) {
      switch (type) {
        case 'difficulty':
          return entry.rating ? entry.rating.toFixed() : '-';
        case 'name':
          return entry.name ? entry.name : '-';
        case 'url':
          return `https://codeforces.com/problemset/problem/${entry.contestId.toString()}/${entry.index}`;
        default:
          return '-';
      }
    }
  }

  return '-';
}
