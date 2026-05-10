import EditTable from '@/components/common/EditTable';

const languageColumns = [
  { type: 'text', title: '외국어명' },
  { type: 'text', title: '독해' },
  { type: 'text', title: '작문' },
  { type: 'text', title: '회화' },
  { type: 'text', title: '시험명' },
  { type: 'text', title: '시험점수' },
  { type: 'text', title: '발급일자' },
  { type: 'text', title: '발급처' },
];

const languageRows = [
  {외국어명: '영어', 독해: '상', 작문: '상', 회화: '상', 시험명: '토익', 시험점수: '895', 발급일자: '', 발급처: '' }
]
export default function LanguageTab() {
  return (
    <div>
      <EditTable
        columns={languageColumns}
        rows={languageRows}
      />
    </div>
  )
}