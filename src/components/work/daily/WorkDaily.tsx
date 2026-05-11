import ViewTable from '@/components/common/ViewTable';
import { Button } from '@/components/ui/button';

const workColumns = [
  '사원번호', '성명', '출근시각', '퇴근시각', '근무시간', '휴일근로', '연장근로', '야간근로', '지각시간', '조퇴시간'
]

const workRows = [
  {
    사원번호: 'EMP2026001',
    성명: '김철수',
    출근시각: '26-05-11 09:02',
    퇴근시각: '26-05-11 18:30',
    근무시간: '08:28',
    휴일근로: '00:00',
    연장근로: '01:30',
    야간근로: '00:00',
    지각시간: '00:02',
    조퇴시간: '00:00',
  }
]

export default function WorkDaily() {
  return (
    <div>
      <ViewTable
        columns={workColumns}
        rows={workRows}
        title='일일근태등록'
        buttonsRender={() => (
          <>
            <Button>출근</Button>
            <Button>퇴근</Button>
          </>
        )}
      />
    </div>
  )
}