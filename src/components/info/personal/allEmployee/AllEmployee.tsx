'use client';

import { Button } from '@/components/ui/button';
import SearchComponent from '@/components/common/SearchComponent';
import ViewTable from '@/components/common/ViewTable';

const allEmployeeColumns = [
  '사원번호', '성명', '부서', '입사일자', '핸드폰', 'EMAIL', '주소'
];

const allEmployeeRows = [
  { 사원번호: 'L02010', 성명: '김팔자', 부서: '강남1팀', 입사일자: '20250102', 핸드폰: '01020203030', EMAIL: 'gnsdl9@naver.com', 주소: '강남구 논현동' }
]

export default function AllEmployee() {
  return (
    <div>
      <SearchComponent/>
      
      <ViewTable
        columns={allEmployeeColumns}
        rows={allEmployeeRows}
        buttonsRender={() => (
          <>
            <Button className='cursor-pointer'>인사기록카드안내</Button>
            <Button className='cursor-pointer'>PDF다운로드</Button>
          </>
        )}
      />
    </div>
  )
}