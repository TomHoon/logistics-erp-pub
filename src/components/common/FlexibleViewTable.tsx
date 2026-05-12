'use client'

import { clsx } from 'clsx';
import { ReactNode, useState } from 'react';

type FlexibleViewTableProps = {
  width?: string;
  title?: string;
  rows: Record<string, string | boolean>[];
  columns?: string[];
};

const dummyColumns = [
  '사원번호', '성명', '부서'
]

export default function FlexibleViewTable({width, columns = dummyColumns, title, rows}:FlexibleViewTableProps) {
  
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
    <div
      className={clsx(
        'bg-[#fff] p-[10px] rounded-[15px] mt-10',
        width ? `flex-1 max-w-[${width}]` : 'w-[1148px] mx-auto'
      )}
    >
      {title && (
        <div className='pt-5 pl-5 text-[20px] font-[700]'>
          <p>{title}</p>
        </div>
      )}
      
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