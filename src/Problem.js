import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import StateContext from './state/state-context';

import { Judges } from './helper/judges';
import { getData } from './helper/get-data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function Problem({ problem, id }) {
  const state = useContext(StateContext);
  const [isEdit, setEdit] = useState(problem.judge === '' && problem.problemId === '');

  function onPropChange(prop) {
    return (event) => {
      const problems = state.problems.slice();
      // Clone problem
      const problem = JSON.parse(JSON.stringify(problems[id]));
      problem[prop] = event.target.value;
      problems[id] = problem;

      state.set({ problems });
    }
  }

  function toggleEdit() {
    if (isEdit && problem.judge && problem.problemId) {
      // Auto fetch required data
      const promises = [];

      if (problem.name === '') {
        promises.push(
          getData(problem.judge, problem.problemId, 'name').then((data) => ['name', data])
        );
      }

      if (problem.url === '') {
        promises.push(
          getData(problem.judge, problem.problemId, 'url').then((data) => ['url', data])
        );
      }

      if (problem.difficulty === '') {
        promises.push(
          getData(problem.judge, problem.problemId, 'difficulty').then((data) => ['difficulty', data])
        );
      }

      Promise.all(promises).then((results) => {
        const problems = state.problems.slice();
        const problem = problems[id];

        for (const [propName, propValue] of results) {
          problem[propName] = propValue;
        }

        problems[id] = problem;
        state.set({ problems });
      });
    }

    setEdit(!isEdit);
  }

  function deleteProblem(event) {
    const problems = state.problems.filter((problem, index) => index !== id);

    state.set({ problems });
  }

  const desc = (
    <>
      {
        state.options.showAbbreviation
          ? Judges[problem.judge].abbr
          : Judges[problem.judge].name
      }
      &nbsp;
      {problem.problemId}
      {problem.name !== '' && problem.name !== '-' ? ' - ' + problem.name : ''}
    </>
  )

  return (
    <Card>
      <Card.Body style={{ padding: '8px 20px' }}>
        <Card.Title style={{ marginBottom: isEdit ? '12px' : '0px' }}>
          {problem.url !== '' && problem.url !== '-'
            ?
            <a href={problem.url}>
              {desc}
            </a>
            :
            desc}&nbsp;
          {state.options.showDifficulty
            && problem.difficulty !== ''
            && problem.difficulty !== '-'
            ? `(${problem.difficulty}) `
            : ''}
          <FontAwesomeIcon
            onClick={toggleEdit}
            icon={!isEdit ? faEdit : faCheck}
            style={{ cursor: 'pointer' }} />&nbsp;
          <FontAwesomeIcon
            onClick={deleteProblem}
            icon={faTrashAlt}
            style={{ cursor: 'pointer' }} />
        </Card.Title>

        {isEdit && <Card.Text>
          <table className='w-100'>
            <tr>
              <td style={{ width: '100px' }}><b>Judge:</b></td>
              <td>
                <Form.Control
                  as='select'
                  size='sm'
                  value={problem.judge}
                  onChange={onPropChange('judge')}>
                  {Object.entries(Judges).map(([id, judge]) => (
                    <option value={id}>{judge.abbr} - {judge.name}</option>
                  ))}
                </Form.Control>
              </td>
            </tr>
            <tr>
              <td style={{ width: '100px' }}><b>Problem ID:</b></td>
              <td>
                <Form.Control
                  size='sm'
                  value={problem.problemId}
                  onChange={onPropChange('problemId')} />
              </td>
            </tr>
            <tr>
              <td style={{ width: '100px' }}><b>Name:</b></td>
              <td>
                <Form.Control
                  size='sm'
                  value={problem.name}
                  placeholder='Leave this field blank to fetch automatically.'
                  onChange={onPropChange('name')} />
              </td>
            </tr>
            <tr>
              <td style={{ width: '100px' }}><b>URL:</b></td>
              <td>
                <Form.Control
                  size='sm'
                  value={problem.url}
                  placeholder='Leave this field blank to fetch automatically.'
                  onChange={onPropChange('url')} />
              </td>
            </tr>
            <tr>
              <td style={{ width: '100px' }}><b>Difficulty:</b></td>
              <td>
                <Form.Control
                  size='sm'
                  value={problem.difficulty}
                  placeholder='Leave this field blank to fetch automatically.'
                  onChange={onPropChange('difficulty')} />
              </td>
            </tr>
          </table>
        </Card.Text>}
      </Card.Body>
    </Card>
  );
}