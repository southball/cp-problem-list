import React from 'react';

export default function Help() {
  return (
    <>
      <p>
        This application simplifies the task of creating and editing a
        list of problems. You only need to enter the judge and the problem
        ID, and it will automatically fetch the name, URL and difficulty
        of the problems. You can also import and export your list in JSON,
        and export your list in Markdown.
      </p>

      <p>
        The application currently supports the following judges:&nbsp;
        <a href="https://atcoder.jp/">AtCoder</a> and&nbsp;
        <a href="https://codeforces.com/">CodeForces</a>.
      </p>

      <p>
        For <b>Codeforces</b>, enter the ID shown in the <code>#</code>&nbsp;
        field of the problemset page, e.g. <code>20C</code> for&nbsp;
        <a href="https://codeforces.com/problemset/problem/20/C">Dijkstra</a>.
      </p>

      <p>
        For <b>AtCoder</b>, enter the ID in the last part of the URL, e.g.&nbsp;
        <code>ARC084_B</code> for&nbsp;
        <a href="https://atcoder.jp/contests/arc084/tasks/arc084_b">Small Multiple</a>.
      </p>
    </>
  )
}