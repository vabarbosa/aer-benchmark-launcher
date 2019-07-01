import React from 'react';
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListInput,
  StructuredListCell} from 'carbon-components-react';
import CheckmarkFilled16 from '@carbon/icons-react/lib/checkmark--filled/16';
import { settings } from 'carbon-components';

const { prefix } = settings;

let git_repos = [['qiskit', 'qiskit-aer'],
                 ['atilag', 'qiskit-aer'],
                 ['chriseclectic', 'qiskit-aer'],
                 ['merav-aharoni', 'qiskit-aer']];

const GithubRepoList = props => (
  <StructuredListWrapper selection border>
    <StructuredListHead>
      <StructuredListRow head>
        <StructuredListCell head>Choose Github repository</StructuredListCell>
      </StructuredListRow>
    </StructuredListHead>
    <StructuredListBody>
      {git_repos.map(([username, repo], i) => (
          <StructuredListRow
            onClick={() => props.onRepoSelected(username, repo)}
            label key={`url-row-${i}`} htmlFor={`url-row-${i}`}>
            <StructuredListCell>{username}</StructuredListCell>
            <StructuredListCell>{repo}</StructuredListCell>
            <StructuredListInput
              id={`url-row-${i}`}
              value={`url-row-${i}`}
              title={`url-row-${i}`}
              name="url-row-0"
              defaultChecked={!i || null}/>
            <StructuredListCell>
              <CheckmarkFilled16
                className={`${prefix}--structured-list-svg`}
                aria-label="select an option">
                <title>select an option</title>
              </CheckmarkFilled16>
            </StructuredListCell>
          </StructuredListRow>
        ))}
    </StructuredListBody>
  </StructuredListWrapper>
);

export default GithubRepoList;