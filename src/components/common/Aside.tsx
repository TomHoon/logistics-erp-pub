"use client"

import { HandCoins, LayoutDashboard, StickyNote, UsersRound } from 'lucide-react';
import s from './Aside.module.css';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { useState } from 'react';

const MENUS = [
  {
    icon: <UsersRound color="#14ADD6" />,
    title: '인사정보',
    submenus: [
      { title: '인사정보등록' },
      { title: '사원명부/인사기록카드' },
      { title: '인사발령등록' },
    ],
  },
  {
    icon: <HandCoins color="#14ADD6" />,
    title: '경조비관리',
    submenus: [{ title: '경조비신청' }, { title: '경조비신청현황' }],
  },
  {
    icon: <StickyNote color="#14ADD6" />,
    title: '증명서관리',
    submenus: [{ title: '증명서발급' }, { title: '증명서발급대장' }],
  },
];

export default function Aside() {
  
  const pathname = usePathname();
  
  const [activeSubmenu, setActiveSubmenu] = useState('인사정보등록');
  
  return (
    <div className={s.container}>
      {/* 로고 */}
      <div className={s.logoSection}>
        <img src="login/logo.png" alt="" />
      </div>

      {/* 메뉴 */}
      <div className={s.menus}>
        <ul>
          {MENUS.map((item, idx) => (
            <li key={`menu-${idx}`}>
              <div className="flex">
                {item.icon}
                <span>{item.title}</span>
              </div>
              {item.submenus && (
                <ul className={s.submenu}>
                  {item.submenus.map((subItem, subIdx) => (
                    <li
                      className={clsx(
                        activeSubmenu === subItem.title && 'font-bold underline',
                      )}
                      key={`submenu-subIdx`}
                      onClick={() => setActiveSubmenu(subItem.title)}
                    >
                      {subItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
