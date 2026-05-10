import EditTable from '@/components/common/EditTable';

const qualificationColumns = [
  { type: 'text', title: '자격증명' },
  { type: 'text', title: '발급기관' },
  { type: 'text', title: '취득일자' },
  { type: 'text', title: '유효일자' },
  { type: 'text', title: '자격증번호' },
];

const qualificationRows = [
  {자격증명: '정보처리기사', 발급기관: '한국산업인력공단', 취득일자: '2011.03.02', 유효일자: '', 자격증번호: '서울가123444' }
]

export default function QualificationTab() {
  return (
    <div>
      <EditTable
        columns={qualificationColumns}
        rows={qualificationRows}
      />
    </div>
  )
}