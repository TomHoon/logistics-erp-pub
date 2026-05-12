import SearchComponent from '@/components/common/SearchComponent';
import EditTable from '@/components/common/EditTable';
import PayrollCalculateResult from '@/components/payroll/calculate/PayrollCalculateResult';

export default function PayrollCalculate() {
  return (
    <div>
      <SearchComponent/>
      <EditTable
        columns={[
          {title: '급여년월', type: 'calendar'},
          {title: '지급기준일', type: 'calendar'},
          {title: '지급총액', type: 'text'},
          {title: '급여계산일', type: 'calendar'},
          {title: '계산인원', type: 'text'},
          {title: '전표번호', type: 'text'},
        ]}
        rows={[
          {
            급여년월: '2026-05',
            지급기준일: '2026-05-25',
            지급총액: '12500000',
            급여계산일: '2026-05-20',
            계산인원: '12',
            전표번호: 'SLIP-202605-001',
          },
          {
            급여년월: '2026-04',
            지급기준일: '2026-04-25',
            지급총액: '11800000',
            급여계산일: '2026-04-20',
            계산인원: '11',
            전표번호: 'SLIP-202604-002',
          },
          {
            급여년월: '2026-03',
            지급기준일: '2026-03-25',
            지급총액: '13200000',
            급여계산일: '2026-03-20',
            계산인원: '13',
            전표번호: 'SLIP-202603-003',
          },
          {
            급여년월: '2026-02',
            지급기준일: '2026-02-25',
            지급총액: '12150000',
            급여계산일: '2026-02-20',
            계산인원: '12',
            전표번호: 'SLIP-202602-004',
          },
          {
            급여년월: '2026-01',
            지급기준일: '2026-01-25',
            지급총액: '11900000',
            급여계산일: '2026-01-20',
            계산인원: '10',
            전표번호: 'SLIP-202601-005',
          },
        ]}
        title='급여계산내역'
      />
      
      <PayrollCalculateResult/>
    </div>
  )
}