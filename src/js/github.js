class Github {
  constructor() {
    this.client_id = '9ca8f045d619ac77d37e';
    this.client_secret = 'abc9fa23bc6ed2f14240329a643d305de3f1bdf0';
    this.repos_sort = 'created: asc';
  }

  async getRepos(){
    const repoResponse = await fetch(`https://api.github.com/users/nasnyder91/repos?&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repos = await repoResponse.json();

    return {
      repos
    }
  }
}

export const github = new Github();
