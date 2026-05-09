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
  { 사원번호: 'L002', 성명: '홍길동2', 직책: '대리', 부서: '인사' },
  { 사원번호: 'L003', 성명: '홍길동3', 직책: '대리', 부서: '인사' },
  { 사원번호: 'L004', 성명: '홍길동4', 직책: '대리', 부서: '인사' },
  { 사원번호: 'L001', 성명: '홍길동', 직책: '대리', 부서: '인사' },
  { 사원번호: 'L002', 성명: '홍길동2', 직책: '대리', 부서: '인사' },
  { 사원번호: 'L003', 성명: '홍길동3', 직책: '대리', 부서: '인사' },
  { 사원번호: 'L004', 성명: '홍길동4', 직책: '대리', 부서: '인사' },
  { 사원번호: 'L001', 성명: '홍길동', 직책: '대리', 부서: '인사' },
  { 사원번호: 'L002', 성명: '홍길동2', 직책: '대리', 부서: '인사' },
  { 사원번호: 'L003', 성명: '홍길동3', 직책: '대리', 부서: '인사' },
  { 사원번호: 'L004', 성명: '홍길동4', 직책: '대리', 부서: '인사' },
  { 사원번호: 'L001', 성명: '홍길동', 직책: '대리', 부서: '인사' },
  { 사원번호: 'L002', 성명: '홍길동2', 직책: '대리', 부서: '인사' },
  { 사원번호: 'L003', 성명: '홍길동3', 직책: '대리', 부서: '인사' },
  { 사원번호: 'L004', 성명: '홍길동4', 직책: '대리', 부서: '인사' },
  { 사원번호: 'L001', 성명: '홍길동', 직책: '대리', 부서: '인사' },
  { 사원번호: 'L002', 성명: '홍길동2', 직책: '대리', 부서: '인사' },
  { 사원번호: 'L003', 성명: '홍길동3', 직책: '대리', 부서: '인사' },
  { 사원번호: 'L004', 성명: '홍길동4', 직책: '대리', 부서: '인사' },  { 사원번호: 'L001', 성명: '홍길동', 직책: '대리', 부서: '인사' },
  { 사원번호: 'L002', 성명: '홍길동2', 직책: '대리', 부서: '인사' },
  { 사원번호: 'L003', 성명: '홍길동3', 직책: '대리', 부서: '인사' },
  { 사원번호: 'L004', 성명: '홍길동4', 직책: '대리', 부서: '인사' },
  
]

export default function SearchResultList({columns = defaultColumns, resultList = defaultResultList, heightSize = 'L'}: SearchResultListProps) {
  
  const getResultContent = (item: Record<string, string>) => {
    const list:ReactNode[] = [];
    
    columns.forEach((column) => {
      if (item[column]) {
        list.push(
          <span className={s.rowItem}>{item[column]}</span>
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
          <span className={s.column} key={column}>{column}</span>
        ))}
      </div>
      
      <ul className={s.rowWrapper}>
        {resultList.map(item => (
          <li key={item.사원번호} className={s.row}>
            {getResultContent(item)}
          </li>
        ))}
      </ul>
    </div>
  )
}