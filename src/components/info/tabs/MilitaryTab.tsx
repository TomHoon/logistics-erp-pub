import EditTable from '@/components/common/EditTable';

const militaryColumns = [
  { type: 'text', title: '제대구분' },
  { type: 'text', title: '입대일자' },
  { type: 'text', title: '전역일자' },
  { type: 'text', title: '군별' },
  { type: 'text', title: '계급' },
  { type: 'text', title: '면제사유' },
];

const militaryRows = [
  { 제대구분: '만기전역', 입대일자: '2004.07.08', 전역일자: '2015.12.31', 군별: '육군', 계급: '병장', 면제사유: '' }
]

export default function MilitaryTab() {
  return (
    <div>
      <EditTable
        columns={militaryColumns}
        rows={militaryRows}
      />
    </div>
  )
}