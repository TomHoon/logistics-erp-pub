import {
  BriefcaseBusiness,
  CalendarClock,
  CalendarDays,
  HandCoins,
  StickyNote,
  UsersRound,
  Wallet,
} from 'lucide-react';

export const INFO_MENUS = [
  {
    icon: <UsersRound color="#14ADD6" />,
    title: '인사정보',
    submenus: [
      { title: '인사정보등록', path: '/info/personal/enroll' },
      { title: '사원명부/인사기록카드', path: '/info/personal/all-employee' },
      { title: '인사발령등록', path: '/info/personal/personal-registration' },
    ],
  },
  {
    icon: <HandCoins color="#14ADD6" />,
    title: '경조비관리',
    submenus: [
      { title: '경조비신청', path: '/info/event-expense/apply' },
      { title: '경조비신청현황', path: '/info/event-expense/status' }
    ],
  },
  {
    icon: <StickyNote color="#14ADD6" />,
    title: '증명서관리',
    submenus: [
      { title: '증명서발급', path: '/info/certificate/issue' },
    ],
  },
];

export const WORK_MENUS = [
  {
    icon: <CalendarClock color="#14ADD6" />,
    title: '근태관리',
    submenus: [
      { title: '일일근태등록', path: '/work/daily' },
      { title: '월근태현황', path: '/work/daily/status' },
    ],
  },
  {
    icon: <BriefcaseBusiness color="#14ADD6" />,
    title: '출장관리',
    submenus: [
      { title: '출장신청', path: '/work/trip/apply' },
      { title: '출장정산', path: '/work/trip/settlement' },
      { title: '출장사용현황', path: '/work/trip/status' }
    ],
  },
  {
    icon: <CalendarDays color="#14ADD6" />,
    title: '휴가관리',
    submenus: [
      { title: '휴가일수설정', path: '/work/vacation/setting' },
      { title: '휴가일수계산', path: '/work/vacation/calculate' },
      { title: '휴가일수신청', path: '/work/vacation/apply' },
      { title: '휴가사용현황', path: '/work/vacation/status' },
    ],
  },
];

export const PAYROLL_MENUS = [
  {
    icon: <Wallet color="#14ADD6" />,
    title: '급상여관리',
    submenus: [
      { title: '급여기본정보관리', path: '/payroll/manage' },
      { title: '급여지급', path: '/payroll/manage/code' },
      { title: '기본수당외수당관리', path: '/payroll/allowance' },
      { title: '급여계산', path: '/payroll/calculate' },
      { title: '급여조회', path: '/payroll/search' },
    ],
  },
];

export const LABOR_MENUS = [
  {
    icon: <CalendarClock color="#14ADD6" />,
    title: '근태관리',
    submenus: [
      { title: '일일근태등록', path: '/work/daily' },
      { title: '월근태현황', path: '/work/status' },
    ],
  },
  {
    icon: <BriefcaseBusiness color="#14ADD6" />,
    title: '출장관리',
    submenus: [
      { title: '출장신청', path: '/work/trip/apply' },
      { title: '출장정산', path: '/work/trip/settlement' },
      { title: '출장사용현황', path: '/work/trip/status' }
    ],
  },
  {
    icon: <CalendarDays color="#14ADD6" />,
    title: '휴가관리',
    submenus: [
      { title: '휴가일수설정', path: '/vacation/setting' },
      { title: '휴가일수계산', path: '/vacation/calculate' },
      { title: '휴가일수신청', path: '/vacation/apply' },
      { title: '휴가사용현황', path: '/vacation/status' },
    ],
  },
];