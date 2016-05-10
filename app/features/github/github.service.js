export default class GitHubService {
  constructor($http) {
    this.$http = $http;
  }

  getUser(user) {
    return this.$http.get('https://api.github.com/users/' + user + '?client_id=189026ff36b510314927&client_secret=2fc5974e4133feb61e0561923b9fbd73bcc41f9d')
  }
  
  getRepos(user) {
    return this.$http.get('https://api.github.com/users/'+ user +'/repos' + '?client_id=189026ff36b510314927&client_secret=2fc5974e4133feb61e0561923b9fbd73bcc41f9d')
  }
  getNotes(user){
    return
    
  }
}