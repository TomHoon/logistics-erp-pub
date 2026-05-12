import SearchComponent from '@/components/common/SearchComponent';
import FlexibleViewTable from '@/components/common/FlexibleViewTable';
import FlexibleEditTable from '@/components/common/FlexibleEditTable';

const dummyData1 = [
  {
    사원번호: 'EMP001',
    성명: '김민수',
    부서: '인사팀',
  },
  {
    사원번호: 'EMP002',
    성명: '이서준',
    부서: '개발팀',
  },
  {
    사원번호: 'EMP003',
    성명: '박지훈',
    부서: '물류팀',
  },
  {
    사원번호: 'EMP004',
    성명: '최유진',
    부서: '재무팀',
  },
  {
    사원번호: 'EMP005',
    성명: '정하늘',
    부서: '영업팀',
  },
];

const dummyData2 = [
  {
    항목명: '식대',
    '지급/공제': '지급',
    금액: '200000',
    비고: '중식 지원',
  },
  {
    항목명: '교통비',
    '지급/공제': '지급',
    금액: '100000',
    비고: '출퇴근 지원',
  },
  {
    항목명: '소득세',
    '지급/공제': '공제',
    금액: '50000',
    비고: '급여 공제',
  },
];

export default function PayrollAllowance() {
  return (
    <div>
      <SearchComponent/>
      
      <div className='flex px-5 gap-5 '>
        <FlexibleViewTable
          width={'569px'}
          title='기본정보'
          columns={[
            '사원번호', '성명', '부서'
          ]}
          rows={dummyData1}
        />
        
        <FlexibleEditTable
          width={'574px'}
          title='기본수당외 수당등록'
          columns={[
            {title: '항목명', type: 'text'},
            {title: '지급/공제', type: 'text'},
            {title: '금액', type: 'text'},
            {title: '비고', type: 'text'},
          ]}
          rows={dummyData2}
        />
      </div>
      
    </div>
  )
}