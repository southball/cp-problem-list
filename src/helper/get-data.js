import { getAtcoderData } from './judges/atcoder';
import { getCodeforcesData } from './judges/codeforces';

export async function getData(judge, problemId, type) {
  if (judge === 'atcoder') {
    return await getAtcoderData(problemId, type);
  } else if (judge === 'codeforces') {
    return await getCodeforcesData(problemId, type);
  } else {
    return '-';
  }
}
