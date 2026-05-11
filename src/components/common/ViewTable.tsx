'use client';

import { ReactNode, useState } from 'react';
import { clsx } from 'clsx';

type ViewTableProps = {
  columns?: string[],
  rows?: Record<string, string | boolean>[],
  buttonsRender?: () => ReactNode,
  title?: string
}

const dummyColumns = [
  '성명',
  '가족관계',
  '주민등록번호',
  '직업',
  '회사명',
  '동거여부',
  '부양가족',
  '장애인',
]

const dummyRows = [
  { 성명: '이미영', 가족관계: '배우자', 주민등록번호: '', 직업: '', 회사명: '', 동거여부: true, 부양가족: true, 장애인: false },
  { 성명: '홍길동', 가족관계: '자녀', 주민등록번호: '99101-1020304', 직업: '', 회사명: '', 동거여부: true, 부양가족: true, 장애인: false },
]


export default function ViewTable({ columns = dummyColumns, rows = dummyRows, buttonsRender, title } : ViewTableProps) {
  
  const [tableRows, setTableRows] = useState(rows);
  const [activeIdx, setActiveIdx] = useState<number | undefined>();
  
  const getRowContent = (row: Record<string, string | boolean>, idx: number) => {
    
    const result: ReactNode[] = [];
    
    const contentList: ReactNode[] = [];
    
    columns.forEach((column, i) => {
      contentList.push(<span className='flex flex-1 justify-center'>{row[column]}</span>)
    });
    
    result.push(
      <li className={clsx(
        'flex p-[5px] rounded-[10px]',
        activeIdx === idx && 'bg-[#F2F7FF]'
      )}
      onClick={() => setActiveIdx(idx)}
      >
        {contentList}
      </li>
    )
    
    return result;
  }
  
  return (
    <div className="w-[1148px] m-auto bg-[#fff] p-[10px] rounded-[15px] mt-10">
      
      {title && (
        <div className='pt-5 pl-5 text-[20px] font-[700]'>
          <p>{title}</p>
        </div>
      )}
      
      {typeof buttonsRender === 'function' &&
        <div id='buttonWrapper' className='flex justify-end gap-5'>
          {buttonsRender()}
        </div>
      }
      
      <div id='colWrapper'
        className="
          relative
          before:content-['']
          before:absolute
          before:left-0
          before:top-[-15px]
          before:w-full
          before:h-[2px]
          before:bg-black
          mt-10
        "
      >
        <ul id='col' className='flex mb-[10px]'>
          {columns.map(column => (
            <li
              
              className='flex-1 flex justify-center font-bold text-[16px] '
              key={column}
            >
              {column}
            </li>
          ))}
        </ul>
      </div>
      
      <div id='rowWrapper'>
        <ul className='flex flex-col gap-'>
          
          {tableRows.map((row, idx) => (getRowContent(row, idx)))}
        
        </ul>
      </div>
    
    </div>
  )
}