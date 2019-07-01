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


const GithubRepoBranch = props => (
  <StructuredListWrapper selection border>
      <StructuredListHead>
        <StructuredListRow head>
          <StructuredListCell head>Choose branch</StructuredListCell>
        </StructuredListRow>
      </StructuredListHead>

      <StructuredListBody>
        {props.branches.map( (branch, i) => (
            <StructuredListRow label
              key={`branch-row-${i}`}
              htmlFor={`branch-row-${i}`}
              onClick={()=>props.onBranchSelected(branch)}>
              <StructuredListCell>{branch}</StructuredListCell>
              <StructuredListInput
                id={`branch-row-${i}`}
                value={`branch-row-${i}`}
                title={`branch-row-${i}`}
                name="branch-row-0"
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

export default GithubRepoBranch;