'use client'

import { clsx } from 'clsx';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ReactNode, useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { ChevronDownIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';


type ColumnType = {
  type: string;
  title: string;
  setter?: (date: Date) => void;
  date?: Date;
}

type FlexibleEditTableProps = {
  width?: string;
  title?: string;
  columns?: ColumnType[];
  rows?: Record<string, string | boolean>[];
  tabName?: string;
  buttonRender?: () => ReactNode;
}

const emptyRow = {
  성명: '', 가족관계: '', 주민등록번호: '', 직업: '', 회사명: '', 동거여부: false, 부양가족: false, 장애인: false
}

export default function FlexibleEditTable({width, columns, rows, buttonRender, title}: FlexibleEditTableProps) {
  
  const [tableRows, setTableRows] = useState(rows);
  
  const getRowContent = (row: Record<string, string | boolean>, idx: number) => {
    
    const result: ReactNode[] = [];
    
    const contentList: ReactNode[] = [
      <span key='checkbox' className='flex flex-1 justify-center'>
        <Checkbox id="agree" />
      </span>,
    ];
    
    columns && columns.forEach((column, i) => {
      contentList.push(
        <span className='flex-1 flex justify-center'>
          { column.type === 'calendar'
            ? (
              <span className='flex flex-1 justify-center'>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      variant="outline"
                      data-empty={!column.date}
                    >
                      {column.date ? format(column.date, "PPP") : <span>Pick a date</span>}
                      <ChevronDownIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={new Date()}
                      onSelect={column.setter ? (v) => column.setter?.(v || new Date()) : undefined}
                      defaultMonth={new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </span>
            ) : column.type === 'checkbox' ? (
              <span className='flex flex-1 pl-5'>
                <Checkbox id="agree" />
              </span>
              // ) :  <span>{row[column.title]}</span>
            ) : <Input defaultValue={row[column.title] as string} className="border-0 pl-1 flex"/>
          }
        </span>
      )
    });
    
    result.push(
      <li className='flex items-center'>
        {contentList}
      </li>
    )
    
    return result;
  }
  
  return (
    <div
      className={clsx(
        'mt-10 bg-[#fff] pb-10 rounded-[15px]',
        width ? `w-[${width}]` : 'w-[1148px] mx-auto',
      )}
    >
      <div className='flex justify-between'>
        {title && (
          <div className='pt-5 pl-5 text-[20px] font-[700]'>
            <p>{title}</p>
          </div>
        )}
        
        <div id='buttonWrapper' className='flex justify-end gap-5 mt-5 mb-5 pr-5'>
          <Button onClick={() => setTableRows(prev => [...(prev || []), emptyRow])}>행추가</Button>
          <Button>행삭제</Button>
        </div>
      </div>
      
      <div id='colWrapper' className='sticky top-0 bg-[#fff] z-10'>
        <ul id='col' className='flex mb-[10px]'>
          {/*전체선택*/}
          <li className='flex-1 flex justify-center'>
            <Checkbox id="agree" />
          </li>
          {columns && columns.map(column => (
            <li className='flex-1 flex font-bold text-[16px]' key={column.title}>{column.title}</li>
          ))}
        </ul>
      </div>
      
      <div id='rowWrapper'>
        <ul className='flex flex-col gap-5'>
          
          {tableRows && tableRows.map((row, idx) => (getRowContent(row, idx)))}
        
        </ul>
      </div>
      
      {typeof buttonRender === 'function' && (
        <div id="buttonWrapper" className='flex justify-end gap-5 pr-5 pt-5'>
          {buttonRender()}
        </div>
      )}
    </div>
  )
}