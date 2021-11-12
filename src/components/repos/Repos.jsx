import Repoitem from "./Repoitem"
function Repos({repos}){
    console.log("repos"+repos);
    return repos.map(repo =><Repoitem repo={repo} key={repo.id} />);
    

}
export default Repos;