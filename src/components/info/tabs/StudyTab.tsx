import EditTable from '@/components/common/EditTable';

const studyColumns = [
  { type: 'calendar', title: '입학년월' },
  { type: 'calendar', title: '졸업년월' },
  { type: 'text', title: '학교명' },
  { type: 'text', title: '전공학과' },
  { type: 'text', title: '학위' },
  { type: 'text', title: '졸업구분' },
  { type: 'text', title: '소재지' },
];

const studyRows = [
  {입학년월: '', 졸업년월: '', 학교명: '신학대', 전공학과: '컴퓨터공학과', 학위: '학사', 졸업구분: '졸업', 소재지: '인천' }
]

export default function StudyTab() {
  return (
    <div>
      <EditTable
        columns={studyColumns}
        rows={studyRows}
      />
    </div>
  )
}