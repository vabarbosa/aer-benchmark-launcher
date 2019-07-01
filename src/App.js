import React, {useState} from 'react';
import './App.scss';
import GithubRepoList from './components/GithubRepoList/GithubRepoList';
import GithubRepoBranch from './components/GithubRepoBranch/GithubRepoBranch';
import RunBenchmark from './components/RunBenchmark/RunBenchmark';
import {getGithubRepoUrl, getGithubRepoBranches} from './components/GithubApi';

function App() {

  const [repo_branches, setRepoBranches] = useState([]);
  const [selected_repo, setSelectedRepo] = useState('https://github.com/Qiskit/qiskit-aer.git');
  const [selected_branch, setSelectedBranch] = useState('master');

  const getBranches = async (username, repository) => {
    let info  = await getGithubRepoBranches(username, repository);
    //console.log("info: ", info);
    let branches = [];
    info.map(branch => branches.push(branch.name));
    setRepoBranches(branches);
    selectRepo(username, repository);
  };

  const selectRepo = (username, repository) => {
    setSelectedRepo(getGithubRepoUrl(username, repository));
  };

  const selectBranch = branch => {
    setSelectedBranch(branch);
  };

  return (
    <div className="App">
      <GithubRepoList onRepoSelected={(username, repository) => getBranches(username, repository)}></GithubRepoList>
      <GithubRepoBranch
        branches={repo_branches}
        onBranchSelected={branch => selectBranch(branch)}></GithubRepoBranch>
      <RunBenchmark repo={selected_repo} branch={selected_branch}></RunBenchmark>
    </div>
  );
};

export default App;
