import SearchComponent from '@/components/common/SearchComponent';
import ViewTable from '@/components/common/ViewTable';

const statusColumns = [
  '신청번호', '신청자', '신청일자', '경조구분', '관계', '대상자', '경조기간', '경조금액', '전자결재상태'
];

const statusRows = [
  {
    신청번호: 'FE20260511001',
    신청자: '김철수',
    신청일자: '2026-05-11',
    경조구분: '결혼',
    관계: '본인',
    대상자: '김철수',
    경조기간: '2026-05-20 ~ 2026-05-22',
    경조금액: '300,000',
    전자결재상태: '결재중',
  }
]

export default function EventExpenseStatus() {
  return (
    <div>
      <SearchComponent/>
      <ViewTable
        columns={statusColumns}
        rows={statusRows}
      />
    </div>
  )
}