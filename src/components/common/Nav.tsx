'use client';

import { ChevronDown } from 'lucide-react';
import s from './Nav.module.css';
import { useState } from 'react';
import { clsx } from 'clsx';
import { usePathname, useRouter } from 'next/navigation';

const NAV_MENU = [
  {title: '인사관리', path: '/info/personal/enroll'},
  {title: '근태관리', path: '/work/daily'},
  {title: '급여관리', path: '/payroll/manage'},
  {title: '일용직관리', path: '/labor/'},
];

export default function Nav() {
  const pathname = usePathname()
  const activeMenu = pathname.includes('info')
    ? '인사관리' : pathname.includes('work')
      ? '근태관리' : pathname.includes('payroll')
        ? '급여관리' : '일용직관리';
  
  const router = useRouter();
  
  return (
    <div className={s.container}>
      {/* 메뉴영역 */}
      <div className={s.navMenu}>
        <ul>
          {NAV_MENU.map((item) => (
            <li
              className={clsx(
                item.title === activeMenu ? 'bg-[#d1e3ff]' : '',
                'rounded-[10px]'
              )}
              onClick={() => {
                console.log('>>>')
                router.push(item.path);
              }}
              key={item.title}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      {/* 유저 정보영역 */}
      <div className={s.userIcons}>
        <div className={s.userPicture}>
          <img src="/nav/profilePicture.png" alt="" />
        </div>
        <div className={s.userNameWrapper}>
          <p className={s.userName}>Tomhoon</p>
          <p>SuperVisor</p>
        </div>
        <ChevronDown color="#501b1b" className="cursor-pointer" />
      </div>
    </div>
  );
}
