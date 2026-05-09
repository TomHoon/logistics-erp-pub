import Nav from './Nav';
import SearchComponent from './SearchComponent';
import SearchResultList from '@/components/common/SearchResultList';

export default function Main() {
  return (
    <div className="flex flex-col">
      <Nav />
      <SearchComponent />
      <SearchResultList/>
    </div>
  );
}
