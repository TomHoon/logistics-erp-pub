import SearchComponent from '@/components/common/SearchComponent';
import ViewTable from '@/components/common/ViewTable';
import PayrollRegisterForm from '@/components/payroll/manage/PayrollRegisterForm';

const payrollColumns = [
  '사원번호', '성명', '직급', '부서', '입사일자', '핸드폰', 'EMAIL'
]

const payrollRows = [
  {
    사원번호: 'EMP2026001',
    성명: '김철수',
    직급: '대리',
    부서: '개발팀',
    입사일자: '2023-03-01',
    핸드폰: '010-1234-5678',
    EMAIL: 'kimcs@example.com',
  },
  {
    사원번호: 'EMP2026002',
    성명: '박범준',
    직급: '대리',
    부서: '개발팀',
    입사일자: '2023-03-01',
    핸드폰: '010-1234-5678',
    EMAIL: 'kimcs@example.com',
  },
]

export default function PayrollManage() {
  return (
    <div>
      <SearchComponent/>
      <ViewTable
        columns={payrollColumns}
        rows={payrollRows}
        title='기본정보'
      />
      
      <PayrollRegisterForm/>
    </div>
  )
}