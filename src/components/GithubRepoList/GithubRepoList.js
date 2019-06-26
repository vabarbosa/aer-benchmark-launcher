import React from 'react';
import {UnorderedList, ListItem} from 'carbon-components-react';

let git_urls = ['https://github.com/Qiskit/qiskit-aer.git',
                'https://github.com/atilag/qiskit-aer.git',
                'https://github.com/christelestic/qiskit-aer.git',
                'https://github.com/merav-aharoni/qiskit-aer.git',
              ];

const GithubRepoList = props => {
  return(
    <UnorderedList>
      ${git_urls.map(url => <ListItem key={url}>${url}</ListItem>)}
    </UnorderedList>
  );
};

export default GithubRepoList;