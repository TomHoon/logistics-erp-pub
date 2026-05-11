'use client';

import { ReactNode } from 'react';
import { clsx } from 'clsx';

const columns = [
  '사원번호', '성명', '부서', '직급', '달력', '비고'
]

type Attendance = {
  date: string,
  status:
    | '출근'
    | '지각'
    | '조퇴'
    | '휴가',
  
  checkIn?: string,
  checkOut?: string,
  icon?: ReactNode,
}

const attendanceList: Attendance[] = [
  {
    date: '2026-05-01',
    status: '출근',
    checkIn: '09:00',
    checkOut: '18:00',
  },
  {
    date: '2026-05-02',
    status: '지각',
    checkIn: '09:32',
    checkOut: '18:00',
  },
  {
    date: '2026-05-03',
    status: '조퇴',
    checkIn: '09:01',
    checkOut: '15:20',
  },
  
  {
    date: '2026-05-04',
    status: '휴가',
  },
]

const tableRows:Record<string, string | Attendance[]>[] = [
  {
    사원번호: 'EMP2026001',
    성명: '김철수',
    부서: '개발팀',
    직급: '대리',
    달력: attendanceList,
    비고: '',
  }
]

export default function WorkStatusTable() {
  
  const getStatusColor = (calendar: Attendance[], idx:number) => {
    console.log(calendar);
    console.log(idx);
    if (!calendar[idx]) return 'bg-[#fff]';
    
    const calendarData:Attendance = calendar[idx]
    console.log('calendarData > ', calendarData);
    
    const statusMap = {
      출근: 'bg-gray-200',
      지각: 'bg-yellow-200',
      조퇴: 'bg-pink-200',
      휴가: 'bg-red-200',
    }
    
    return statusMap[calendarData['status']];
  }
  
  const getRowContent = (row: Record<string, string | Attendance[]>, idx: number) => {
    
    const elementList:ReactNode[] = [];
    
    columns.forEach((column, idx) => {
      if (column === '달력' && Array.isArray(row[column])) {
        const list = row[column];
        
        const calendarData =
          <>
            <span className='flex-3 flex font-bold text-[16px] flex-wrap'>
              {Array.from({length:31}, (_, i) => (
                <span key={i} className='w-[6.25%] flex items-center pt-1 pb-1 border-1 justify-center'>
                  <div
                    className={clsx(
                      'w-[12px] h-[12px]',
                      Array.isArray(row[column]) && getStatusColor(row[column], i),
                    )}
                  >
                  </div>
                </span>
              ))}
            </span>
          </>
        
        elementList.push(calendarData);
      } else {
        
        elementList.push(
          <span className='flex-1 w-full flex font-bold text-[16px] flex-wrap justify-center'>
            {typeof row[column] === 'string' && row[column]}
          </span>
        );
        
      }
      
    });
    
    return (
      <li
        className='flex font-bold text-[16px]'
        key={idx}
      >
        {elementList}
      </li>
    )
    

  }
  
  return (
    <div className="w-[1148px] m-auto bg-[#fff] p-[10px] rounded-[15px] mt-10">
      
      <div className='pt-5 pl-5 text-[20px] font-[700]'>
        <span>근태현황</span>
      </div>
      
      {/*{typeof buttonsRender === 'function' &&*/}
      {/*  <div id='buttonWrapper' className='flex justify-end gap-5'>*/}
      {/*    {buttonsRender()}*/}
      {/*  </div>*/}
      {/*}*/}
      
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
          {columns.map((col, i) => {
            if (col === '달력') {
              return (
                <li
                  className='flex-3 flex font-bold text-[16px] flex-wrap'
                  key={i}
                >
                  {Array.from({length: 31}, (_, i) => {
                    return (
                      <span key={i} className='w-[6.25%] flex justify-center items-center'>{i+1}</span>
                    )
                  })}
                </li>
              )
            }
            
            return (
              <li
                className='flex-1 flex justify-center font-bold text-[16px] items-center'
                key={i}
              >
                {col}
              </li>
            )
          })}
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