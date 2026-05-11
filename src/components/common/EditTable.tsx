import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
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

type EditTableProps = {
  columns?: ColumnType[],
  rows?: Record<string, string | boolean>[],
  tabName?: string,
  buttonRender?: () => ReactNode;
}

const emptyRow = {
  성명: '', 가족관계: '', 주민등록번호: '', 직업: '', 회사명: '', 동거여부: false, 부양가족: false, 장애인: false
}

const dummyColumns = [
  { type: 'text', title: '성명' },
  { type: 'text', title: '가족관계' },
  { type: 'text', title: '주민등록번호' },
  { type: 'text', title: '직업' },
  { type: 'text', title: '회사명' },
  { type: 'checkbox', title: '동거여부' },
  { type: 'checkbox', title: '부양가족' },
  { type: 'checkbox', title: '장애인' },
]

const dummyRows = [
  { 성명: '이미영', 가족관계: '배우자', 주민등록번호: '', 직업: '', 회사명: '', 동거여부: true, 부양가족: true, 장애인: false },
  { 성명: '홍길동`', 가족관계: '자녀', 주민등록번호: '99101-1020304', 직업: '', 회사명: '', 동거여부: true, 부양가족: true, 장애인: false },
]


export default function EditTable({ columns = dummyColumns, rows = dummyRows, tabName, buttonRender } : EditTableProps) {
  
  const [tableRows, setTableRows] = useState(rows);
  
  const getRowContent = (row: Record<string, string | boolean>, idx: number) => {
    
    const result: ReactNode[] = [];
    
    const contentList: ReactNode[] = [
      <span key='checkbox' className='flex flex-1 justify-center'>
        <Checkbox id="agree" />
      </span>,
    ];
    
    columns.forEach((column, i) => {
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
      <li className='flex'>
        {contentList}
      </li>
    )
    
    return result;
  }
  
  return (
    <div
      className="
        w-[1148px] ml-auto mr-auto bg-[#fff] pb-10 rounded-[15px]
        mt-10
        max-h-[570px] overflow-y-scroll
        {/*relative*/}
        {/*before:content-['']*/}
        {/*before:absolute*/}
        {/*before:left-0*/}
        {/*before:top-[-15px]*/}
        {/*before:w-full*/}
        {/*before:h-[2px]*/}
        {/*before:bg-black*/}
        {/*mt-10*/}
      "
    >
      
      <div id='buttonWrapper' className='flex justify-end gap-5 mt-5 mb-5 pr-5'>
        {tabName === 'familiy' && (
          <Button>주민등록번호확인</Button>
        )}
        <Button onClick={() => setTableRows(prev => [...prev, emptyRow])}>행추가</Button>
        <Button>행삭제</Button>
      </div>
      
      <div id='colWrapper' className='sticky top-0 bg-[#fff] z-10'>
        <ul id='col' className='flex mb-[10px]'>
          {/*전체선택*/}
          <li className='flex-1 flex justify-center'>
            <Checkbox id="agree" />
          </li>
          {columns.map(column => (
            <li className='flex-1 flex font-bold text-[16px]' key={column.title}>{column.title}</li>
          ))}
        </ul>
      </div>
      
      <div id='rowWrapper'>
        <ul className='flex flex-col gap-5'>
          
          {tableRows.map((row, idx) => (getRowContent(row, idx)))}
          
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