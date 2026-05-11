'use client';

import SearchComponent from '@/components/common/SearchComponent';
import ViewTable from '@/components/common/ViewTable';
import { Button } from '@/components/ui/button';

const personalColumns = [
  'No', '발령구분', '발행일자', '사원번호', '성명', '발령내용', '비고'
];

const personalRows = [
  { No: '1', 발령구분: '부서이동', 발행일자: '20250102', 사원번호: 'L00001', 성명: '이무개', 발령내용: '과장->과장', 비고: '' }
]

export default function PersonalRegistration() {
  return (
    <div>
      <SearchComponent/>
      <ViewTable
        columns={personalColumns}
        rows={personalRows}
        buttonsRender={() => (
          <Button>발령등록</Button>
        )}
      />
    </div>
  )
}