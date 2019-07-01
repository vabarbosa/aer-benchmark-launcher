

const GITHUB_ROOT_URL = 'https://github.com'
const API_ROOT = 'https://api.github.com/repos';

const getGithubRepoUrl = (username, repository) => (
  `${GITHUB_ROOT_URL}/${username}/${repository}.git`
);

const getGithubRepoBranches = async (username, repository) => {
    const address = `${API_ROOT}/${username}/${repository}/branches`;
    const response = await fetch(address);
    return await response.json();
};

export { getGithubRepoUrl, getGithubRepoBranches };