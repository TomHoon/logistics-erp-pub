'use client'

import SearchComponent from '@/components/common/SearchComponent';
import EditTable from '@/components/common/EditTable';
import { Button } from '@/components/ui/button';

const settingColumns = [
  { type: 'text', title: '사원번호' },
  { type: 'text', title: '성명' },
  { type: 'text', title: '직급' },
  { type: 'text', title: '부서' },
  { type: 'text', title: '입사일자' },
  { type: 'text', title: '발생일수' },
  { type: 'text', title: '사용일수' },
  { type: 'text', title: '잔여일수' },
  { type: 'checkbox', title: '이관여부' },
]

const settingRows = [
  {
    사원번호: 'EMP001',
    성명: '김철수',
    직급: '대리',
    부서: '개발팀',
    입사일자: '2023-03-01',
    발생일수: '15',
    사용일수: '5',
    잔여일수: '10',
    이관여부: true,
  },
  
  {
    사원번호: 'EMP002',
    성명: '이영희',
    직급: '과장',
    부서: '인사팀',
    입사일자: '2021-07-15',
    발생일수: '20',
    사용일수: '8',
    잔여일수: '12',
    이관여부: false,
  },
  
  {
    사원번호: 'EMP003',
    성명: '박민수',
    직급: '사원',
    부서: '총무팀',
    입사일자: '2024-01-10',
    발생일수: '12',
    사용일수: '2',
    잔여일수: '10',
    이관여부: true,
  },
]

export default function VacationSetting() {
  return (
    <div>
      <SearchComponent/>
      <EditTable
        columns={settingColumns}
        rows={settingRows}
        buttonRender={() => (
          <Button className='cursor-pointer'>저장</Button>
        )}
      />
    </div>
  )
}