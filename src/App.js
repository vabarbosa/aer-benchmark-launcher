import React from 'react';
import './App.scss';
import GithubRepoList from './components/GithubRepoList/GithubRepoList';
import GithubRepoBranch from './components/GithubRepoBranch/GithubRepoBranch';
import RunBenchmark from './components/RunBenchmark/RunBenchmark';


function App() {
  return (
    <div className="App">
      <GithubRepoList></GithubRepoList>
      <GithubRepoBranch></GithubRepoBranch>
      <RunBenchmark></RunBenchmark>
    </div>
  );
}

export default App;
