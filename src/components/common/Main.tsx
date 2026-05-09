import Nav from './Nav';
import SearchComponent from './SearchComponent';

export default function Main() {
  return (
    <div className="flex flex-col">
      <Nav />
      <SearchComponent />
    </div>
  );
}
