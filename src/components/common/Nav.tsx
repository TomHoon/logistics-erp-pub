import { ChevronDown } from 'lucide-react';
import s from './Nav.module.css';

const NAVMENU = ['인사관리', '근태관리', '급여관리', '일용직관리'];

export default function Nav() {
  return (
    <div className={s.container}>
      {/* 메뉴영역 */}
      <div className={s.navMenu}>
        <ul>
          {NAVMENU.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {/* 유저 정보영역 */}
      <div className={s.userIcons}>
        <div className={s.userPicture}>
          <img src="nav/profilePicture.png" alt="" />
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
