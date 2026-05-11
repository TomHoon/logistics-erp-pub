
const keys = [
  '사원번호',
  '성명',
  '연차기간',
  '발생일수',
  '조정연차일수',
  '사용일수',
  '잔여일수',
]

const statusInfo: Record<string, string> = {
  사원번호: 'L0001', 성명: '이김수', 연차기간: '2025.01.01 ~ 2025.12.31', 발생일수: '9.5', 조정연차일수: '0.0', 사용일수: '1.5', 잔여일수: '8.0'
}

export default function VacationApplyStatus() {
  return (
    <div className="w-[1148px] mt-10 ml-auto mr-auto bg-[#fff] p-10 rounded-[15px] mb-10">
      <div id='statusTableWrapper' className='flex gap-5 flex-wrap'>
        
        {keys.map((key, index) => (
          <div key={index} className="flex gap-5 w-[23%]">
            <span className='min-w-[100px] flex items-center'>{key}</span>
            <span className='flex items-center pl-3 pr-3 bg-[#F2F2F2] rounded-[5px] border-[2px]'>{statusInfo[key]}</span>
          </div>
        ))}
        
      </div>
    </div>
  )
}