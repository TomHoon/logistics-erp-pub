import SearchComponent from '@/components/common/SearchComponent';
import ViewTable from '@/components/common/ViewTable';
import CertificateIssueForm from '@/components/info/certificate/CertificateIssueForm';

const certificationColumns = [
  '신청번호', '증명서구분', '신청일자', '성명', '발행상태', '발행일자', '전자결재상태', '용도'
]

const certificationRows = [
  {
    신청번호: 'CERT20260511001',
    증명서구분: '재직증명서',
    신청일자: '2026-05-11',
    성명: '김철수',
    발행상태: '발행완료',
    발행일자: '2026-05-11',
    전자결재상태: '결재완료',
    용도: '은행 제출용',
  }
]



export default function CertificateIssue(){
  return (
    <div className='w-[1148px] rounded-[10px] ml-auto mr-auto'>
      <SearchComponent/>
      <ViewTable
        columns={certificationColumns}
        rows={certificationRows}
      />
      <CertificateIssueForm/>
    </div>
  )
}