import s from './searchResultList.module.css'
import { ReactNode } from 'react';

type SearchResultListProps = {
  columns?: string[],
  resultList?: Record<string, string>[],
  heightSize?: 'L' | 'M' | 'S',
}

const defaultColumns = [
  '사원번호',
  '성명',
  '직책',
  '부서',
];

const defaultResultList = [
  { 사원번호: 'L001', 성명: '홍길동', 직책: '대리', 부서: '인사' },
  { 사원번호: 'L002', 성명: '김철수', 직책: '과장', 부서: '총무' },
  { 사원번호: 'L003', 성명: '이영희', 직책: '사원', 부서: '회계' },
  { 사원번호: 'L004', 성명: '박민수', 직책: '차장', 부서: '개발' },
  { 사원번호: 'L005', 성명: '정수빈', 직책: '대리', 부서: '영업' },
  { 사원번호: 'L006', 성명: '최유진', 직책: '사원', 부서: '마케팅' },
  { 사원번호: 'L007', 성명: '강동원', 직책: '부장', 부서: '기획' },
  { 사원번호: 'L008', 성명: '윤아름', 직책: '대리', 부서: '인사' },
  { 사원번호: 'L009', 성명: '한지민', 직책: '사원', 부서: 'CS' },
  { 사원번호: 'L010', 성명: '오세훈', 직책: '과장', 부서: '물류' },
  { 사원번호: 'L011', 성명: '서지훈', 직책: '대리', 부서: '개발' },
  { 사원번호: 'L012', 성명: '송하나', 직책: '사원', 부서: '디자인' },
  { 사원번호: 'L013', 성명: '배성민', 직책: '차장', 부서: '영업' },
  { 사원번호: 'L014', 성명: '임채린', 직책: '주임', 부서: '총무' },
  { 사원번호: 'L015', 성명: '조현우', 직책: '대리', 부서: '보안' },
  { 사원번호: 'L016', 성명: '문소희', 직책: '사원', 부서: '회계' },
  { 사원번호: 'L017', 성명: '신동혁', 직책: '부장', 부서: '인사' },
  { 사원번호: 'L018', 성명: '권나영', 직책: '대리', 부서: '기획' },
  { 사원번호: 'L019', 성명: '유태준', 직책: '과장', 부서: '물류' },
  { 사원번호: 'L020', 성명: '백지은', 직책: '사원', 부서: '마케팅' },
  
]

export default function SearchResultList({columns = defaultColumns, resultList = defaultResultList, heightSize = 'L'}: SearchResultListProps) {
  
  const getResultContent = (item: Record<string, string>) => {
    const list:ReactNode[] = [];
    
    columns.forEach((column, idx) => {
      if (item[column]) {
        list.push(
          <span key={idx} className={s.rowItem}>{item[column]}</span>
        )
      }
    });
    
    return list;
  }
  // 20개씩 인피니티 스크롤 처리
  return (
    <div className={`${s.container} ${heightSize === 'M' && s.h350}`}>
      <div className={s.columns}>
        {columns.map((column, i) => (
          <span className={s.column} key={`${column}-${i}`}>{column}</span>
        ))}
      </div>
      
      <ul className={s.rowWrapper}>
        {resultList.map((item, idx) => (
          <li key={`${idx}`} className={s.row}>
            {getResultContent(item)}
          </li>
        ))}
      </ul>
    </div>
  )
}