'use client'

import SearchComponent from '@/components/common/SearchComponent';
import ViewTable from '@/components/common/ViewTable';
import VacationApplyStatus from '@/components/work/vacation/apply/VacationApplyStatus';
import VacationApplyForm from '@/components/work/vacation/apply/VacationApplyForm';

const vacationApplyColumns = [
  'No', '신청일', '휴가구분', '전일/반(전/후)', '시작일', '종료일', '일수', '전자결재상태', '실제사용', '휴가사유'
]

const vacationApplyRows = [
  {
    No: '1',
    신청일: '2026-05-11',
    휴가구분: '연차',
    '전일/반(전/후)': '전일',
    시작일: '2026-05-20',
    종료일: '2026-05-20',
    일수: '1',
    전자결재상태: '결재완료',
    실제사용: '사용',
    휴가사유: '개인 일정',
  },
  
  {
    No: '2',
    신청일: '2026-05-03',
    휴가구분: '반차',
    '전일/반(전/후)': '오전반차',
    시작일: '2026-05-03',
    종료일: '2026-05-03',
    일수: '0.5',
    전자결재상태: '결재중',
    실제사용: '예정',
    휴가사유: '병원 방문',
  },
]

export default function VacationApply(){
  return (
    <div>
      <SearchComponent/>
      <VacationApplyStatus/>
      <ViewTable
        title='휴가신청내역'
        columns={vacationApplyColumns}
        rows={vacationApplyRows}
      />
      <VacationApplyForm/>
    </div>
  )
}