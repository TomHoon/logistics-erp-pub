'use client'

import SearchComponent from '@/components/common/SearchComponent';
import ViewTable from '@/components/common/ViewTable';
import { Button } from '@/components/ui/button';

const payrollColumns = [
  '지급기준일', '사원번호', '성명', '부서', '지급총액', '공제총액', '실지급액'
]

const payrollRows = [
  {
    지급기준일: '2026-05-25',
    사원번호: 'EMP001',
    성명: '김민수',
    부서: '인사팀',
    지급총액: '3200000',
    공제총액: '280000',
    실지급액: '2920000',
  },
  {
    지급기준일: '2026-05-25',
    사원번호: 'EMP002',
    성명: '이서준',
    부서: '개발팀',
    지급총액: '4100000',
    공제총액: '390000',
    실지급액: '3710000',
  },
  {
    지급기준일: '2026-05-25',
    사원번호: 'EMP003',
    성명: '박지훈',
    부서: '물류팀',
    지급총액: '3500000',
    공제총액: '310000',
    실지급액: '3190000',
  },
  {
    지급기준일: '2026-05-25',
    사원번호: 'EMP004',
    성명: '최유진',
    부서: '재무팀',
    지급총액: '3800000',
    공제총액: '340000',
    실지급액: '3460000',
  },
  {
    지급기준일: '2026-05-25',
    사원번호: 'EMP005',
    성명: '정하늘',
    부서: '영업팀',
    지급총액: '3600000',
    공제총액: '300000',
    실지급액: '3300000',
  },
];

const payrollDetailList = {
  paymentItems: [
    {
      name: '기본급',
      amount: 5000000,
    },
    {
      name: '식대',
      amount: 150000,
    },
    {
      name: '차량유지비',
      amount: 200000,
    },
  ],
  
  deductionItems: [
    {
      name: '소득세',
      amount: 367930,
    },
    {
      name: '국민연금',
      amount: 202050,
    },
  ],
};

export default function PayrollSearch() {
  return (
    <div>
      <SearchComponent/>
      <ViewTable
        title='급여목록'
        columns={payrollColumns}
        rows={payrollRows}
        buttonsRender={() => (
          <>
            <Button>수정</Button>
            <Button>인쇄</Button>
            <Button>E-MAIL발송</Button>
          </>
        )}
      />
      
      {/*전체급여목록합계*/}
      <div id="resultPayroll" className='flex mx-auto mt-5 w-[1148px] rounded-[10px] bg-[#fff]'>
        <div className='grid grid-cols-7 p-5 w-full'>
          <span className='col-span-4 text-center'>합계</span>
          <span className='col-span-1 text-center'>17,561,300</span>
          <span className='col-span-1 text-center'>2,694,200</span>
          <span className='col-span-1 text-center'>975,100</span>
        </div>
      </div>
      
      <div id="payrollDetail" className='flex flex-col mx-auto mt-5 w-[1148px] rounded-[10px] bg-[#fff]'>
        <div className='pt-5 pl-5 text-[20px] font-[700]'>
          <p>급여명세서</p>
        </div>
        
        <div
          className="
            p-5
            w-full
            text-center
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
          <div id='colsWrapper' className='grid grid-cols-[80px_1fr_150px_1fr_150px] border-b-2 border-[#ddd]'>
            <div>
              <span>No</span>
            </div>
            
            <div className='col-span-2 border-x-2 border-[#ddd]'>
              <span>지급항목</span>
            </div>
            
            <div className='col-span-2 border-r-2 border-[#ddd]'>
              <span>공제항목</span>
            </div>
          </div>
          
          <div id="rowsWrapper">
            <div
              className="grid grid-cols-[80px_1fr_150px_1fr_150px]"
            >
              
              <div>
                <span>1</span>
              </div>
              
              <div className='border-l-2 border-[#ddd]'>
                <span>기본급[전액과세]</span>
              </div>
              
              <div className='text-right pr-2 border-r-2 border-[#ddd]'>
                <span>5,000,000</span>
              </div>
              
              <div>
                <span>소득세</span>
              </div>
              
              <div className='text-right pr-2 border-r-2 border-[#ddd]'>
                <span>367,930</span>
              </div>
              
            </div>
          </div>
          
        </div>
        
 
        
        
      </div>
      
      
      {/*개인급여목록합계*/}
      <div id="resultPayroll" className='flex mx-auto mt-5 w-[1148px] rounded-[10px] bg-[#fff]'>
        <div className='grid grid-cols-7 p-5 w-full'>
          <span className='col-span-4 text-center'>합계</span>
          <span className='col-span-1 text-center'>17,561,300</span>
          <span className='col-span-1 text-center'>2,694,200</span>
          <span className='col-span-1 text-center'>975,100</span>
        </div>
      </div>
      
      
    </div>
  )
}