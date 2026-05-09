'use client';

import { ChevronDown, Search } from 'lucide-react';
import { Input } from '../ui/input';
import s from './Search.module.css';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';

export default function SearchComponent() {
  
  const [searchOption, setSearchOption] = useState<'성명' | '사번'>('성명');
  
  return (
    <div className={s.container}>
      {/* 전체개수 */}
      <div>
        <p className={ s.total }>300</p>
        <p>Total</p>
      </div>

      <div className={s.searchWrapper}>
        <div className={s.dropdown}>
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" className='text-left w-[120] h-[50]'/>}>
              { searchOption }
            </DropdownMenuTrigger>
            
            <DropdownMenuContent>
              <DropdownMenuGroup>
                {/*<DropdownMenuLabel>My Account</DropdownMenuLabel>*/}
                <DropdownMenuItem onClick={e => setSearchOption('성명')}>성명</DropdownMenuItem>
                <DropdownMenuItem onClick={e => setSearchOption('사번')}>사번</DropdownMenuItem>
              </DropdownMenuGroup>
              
              {/*<DropdownMenuSeparator />*/}
              
              {/*<DropdownMenuGroup>*/}
              {/*  <DropdownMenuItem>Team</DropdownMenuItem>*/}
              {/*  <DropdownMenuItem>Subscription</DropdownMenuItem>*/}
              {/*</DropdownMenuGroup>*/}
              
            </DropdownMenuContent>
          
          </DropdownMenu>
          <ChevronDown className='absolute top-3 right-3'/>
        </div>
        
        <div className={s.searchCondition}>
          <Input className='w-[350] h-[50] pr-[50]'/>
          <Search className='absolute top-3 right-3 pr-2' color="#501b1b" />
        </div>
        
      </div>

      <div>
        <Button className="w-[180px] h-[46px] cursor-pointer">Search</Button>
      </div>
    </div>
  );
}
