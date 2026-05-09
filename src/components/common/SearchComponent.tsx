import { Search } from 'lucide-react';
import { Input } from '../ui/input';
import s from './Search.module.css';
import { Button } from '../ui/button';

export default function SearchComponent() {
  return (
    <div className={s.container}>
      {/* 전체개수 */}
      <div>
        <p className="total">300</p>
        <p>Total</p>
      </div>

      <div className={s.searchCondition}>
        <Input />
        <Search color="#501b1b" />
      </div>

      <div>
        <Button className="w-[180px] h-[46px]">Search</Button>
      </div>
    </div>
  );
}
