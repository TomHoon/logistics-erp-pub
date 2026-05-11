"use client"

import { HandCoins, LayoutDashboard, StickyNote, UsersRound } from 'lucide-react';
import s from './Aside.module.css';
import { usePathname, useRouter } from 'next/navigation';
import { clsx } from 'clsx';
import {
  INFO_MENUS,
  PAYROLL_MENUS,
  WORK_MENUS,
  LABOR_MENUS
} from '@/components/common/asideMenus/asideMenus';


export default function Aside() {
  
  const pathname = usePathname();
  const activeSubmenu =
    pathname ?? '';
  
  
  const MENU = {
    info: INFO_MENUS,
    payroll: PAYROLL_MENUS,
    work: WORK_MENUS,
    labor: LABOR_MENUS,
  }[pathname.split('/').filter(Boolean)[0] || 'info'];
  
  
  const router = useRouter();
  
  return (
    <div className={s.container}>
      {/* 로고 */}
      <div className={s.logoSection}>
        <img src="/login/logo.png" alt="" onClick={() => router.push('/info/personal/enroll')} />
      </div>

      {/* 메뉴 */}
      <div className={s.menus}>
        <ul>
          {(MENU || INFO_MENUS).map((item, idx) => (
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
                        activeSubmenu === subItem.path && 'font-bold underline',
                      )}
                      key={`submenu-${subIdx}`}
                      onClick={() => {
                        if (subItem.path) {
                          router.push(subItem.path);
                        }
                      }}
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
