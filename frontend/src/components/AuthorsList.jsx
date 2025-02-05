import { Link } from 'react-router-dom';

function AuthorsList() {
  return (
    <div>
      <h2>Our Authors</h2>
      <ul>
        <li><Link to="/author/1">Ali Asghar Faridi</Link></li>
        <li><Link to="/author/2">Mohamad Seyfi</Link></li>
      </ul>
    </div>
  );
}

export default AuthorsList;
