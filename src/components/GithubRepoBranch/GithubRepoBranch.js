import React from 'react';
import {UnorderedList, ListItem} from 'carbon-components-react';

let git_branches = ['master', 'stable'];

const GithubRepoBranch = props => {
  return(
    <UnorderedList>
      ${git_branches.map(branch => <ListItem key={branch}>${branch}</ListItem>)}
    </UnorderedList>
  );
};

export default GithubRepoBranch;