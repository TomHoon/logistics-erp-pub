import EditTable from '@/components/common/EditTable';

const careerColumns = [
  { type: 'text', title: '회사명' },
  { type: 'text', title: '입사일자' },
  { type: 'text', title: '퇴직일자' },
  { type: 'text', title: '직책' },
  { type: 'text', title: '근무부서' },
  { type: 'text', title: '퇴직사유' },
];

const careerRows = [
  {회사명: '아이나비', 입사일자: '2012.03.02', 퇴직일자: '2015.02.01', 직책: '대리', 근무부서: '사업부', 퇴직사유: '' }
]

export default function CareerTab() {
  return (
    <div>
      <EditTable
        columns={careerColumns}
        rows={careerRows}
      />
    </div>
  )
}