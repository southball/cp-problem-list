import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import StateContext from './state/state-context';

import Alertify from 'alertifyjs/build/alertify.min.js';
import { Judges } from './helper/judges';

export default function Options() {
  const state = useContext(StateContext);

  function importData() {
    const input = document.createElement('input');
    input.type = 'file';

    input.addEventListener('change', () => {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        try {
          const data = JSON.parse(reader.result);
          state.set({ problems: data });
          Alertify.success('Imported data from file.');
        } catch (e) {
          Alertify.error('Cannot read the file chosen.');
        }
      };

      reader.readAsText(file);
    });

    input.click();
  }

  function exportData() {
    const json = JSON.stringify(state.problems);
    const blob = new Blob([json], { type: 'octet/stream' });
    const url = URL.createObjectURL(blob);

    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'problems.json';
    anchor.click();

    URL.revokeObjectURL(url);
  }

  function exportMarkdown() {
    const problems = state.problems.slice();
    const markdown = problems
      .map((problem) => {
        let line = '';

        line += `- [`;

        line += state.options.showAbbreviation
          ? Judges[problem.judge].abbr
          : Judges[problem.judge].name;

        line += ` ${problem.problemId}`;
        if (state.options.showDifficulty && problem.name !== '' && problem.difficulty !== '-')
          line += ` - ${problem.name}`;
        if (problem.difficulty !== '' && problem.difficulty !== '-')
          line += ` (${problem.difficulty})`;
        line += ']';
        line += `(${problem.url})`;

        return line;
      })
      .join('\n') + '\n';
    console.log(markdown);
  }

  function sortProblems() {
    const problems = state.problems.slice();
    problems.sort((a, b) => {
      if (a.judge !== b.judge) {
        return a.judge > b.judge;
      } else if (a.problemId !== b.problemId) {
        return a.problemId > b.problemId;
      } else {
        return 0;
      }
    });

    state.set({ problems });
  }

  function clearAllData() {
    state.set({ problems: [] });
  }

  function onOptionToggled(option) {
    return (event) => {
      const options = { ...state.options };
      options[option] = !options[option];
      state.set({ options });
    };
  };

  return (
    <>
      <Form.Check
        checked={state.options.showDifficulty ? 'checked' : ''}
        onChange={onOptionToggled('showDifficulty')}
        label='Show Difficulty' />
      <Form.Check
        checked={state.options.showAbbreviation ? 'checked' : ''}
        onChange={onOptionToggled('showAbbreviation')}
        label='Show Abbreviations of Judge' />
      <Button variant='dark' onClick={importData}>Import Data (Override)</Button>&nbsp;
      <Button variant='dark' onClick={exportData}>Export Data</Button>&nbsp;
      <Button variant='dark' onClick={exportMarkdown}>Export Markdown</Button>&nbsp;
      <Button variant='dark' onClick={sortProblems}>Sort Problems</Button>&nbsp;
      <Button variant='dark' onClick={clearAllData}>Clear All Data</Button>
    </>
  );
}