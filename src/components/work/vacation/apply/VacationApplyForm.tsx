'use client'

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { ChevronDownIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';

const holidayTypeList = [
  '전일',
  '오전반차',
  '오후반차',
]

export default function VacationApplyForm() {
  const [date, setDate] = useState<Date>();
  
  return (
    <div className='w-[1148px] bg-[#fff] rounded-[15px] ml-auto mr-auto mt-10'>
      <div id='formWrapper' className='p-10'>
        
        <div className='pt-5 pl-5 text-[20px] font-[700]'>
          <p>휴가신청</p>
        </div>
        
        
        {/*휴가신청서양식시작*/}
        <div className="border rounded-md bg-white p-4 w-full mt-5">
          <div className="grid grid-cols-2 gap-x-10 gap-y-4">
            {/* 휴가신청일 */}
            <div className="flex items-center">
              <label className="w-[120px] text-sm font-medium">
                * 휴가신청일
              </label>
              
              <div className="relative flex-1">
                <Input defaultValue="2026.05.11" />
              </div>
            </div>
            
            {/* 전일/반일 */}
            <div className="flex items-center">
              <label className="w-[120px] text-sm font-medium">
                * 전일/반일
              </label>
              
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="선택" />
                </SelectTrigger>
                
                <SelectContent>
                  {holidayTypeList.map((type, index) => (
                    <SelectItem value={type} key={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* 휴가기간 */}
            <div className="flex items-center">
              <label className="w-[120px] text-sm font-medium">
                * 휴가기간
              </label>
              
              <div className="flex items-center gap-2 flex-1">
                <div className="relative flex-1">
                  <Popover>
                    <PopoverTrigger>
                      <div className='flex items-center'>
                        {date ? format(date, "PPP") : <span className='text-[14px]'>날짜선택</span>}
                        <ChevronDownIcon />
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={new Date()}
                        onSelect={undefined}
                        defaultMonth={new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                  
                </div>
                
                <span>~</span>
                
                <div className="relative flex-1">
                  <Popover>
                    <PopoverTrigger>
                      <div className='flex items-center'>
                        {date ? format(date, "PPP") : <span className='text-[14px]'>날짜선택</span>}
                        <ChevronDownIcon />
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={new Date()}
                        onSelect={undefined}
                        defaultMonth={new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="flex items-center gap-2">
                  <span>(일수 :</span>
                  
                  <Input
                    defaultValue="1"
                    className="w-[60px]"
                  />
                  
                  <span>)</span>
                </div>
              </div>
            </div>
            
            {/* 전자결재 */}
            <div className="flex items-center">
              <label className="w-[120px] text-sm font-medium">
                전자결재상태
              </label>
              
              <Button
                variant="outline"
                className="w-[140px] justify-start"
              >
                작성
              </Button>
            </div>
            
            {/* 실제사용여부 */}
            <div className="flex items-center">
              <label className="w-[120px] text-sm font-medium">
                실제사용여부
              </label>
              
              <Input defaultValue="Y" />
            </div>
            
            {/* 휴가사유 */}
            <div className="flex items-center col-span-2">
              <label className="w-[120px] text-sm font-medium">
                휴가사유
              </label>
              
              <Input defaultValue="건강검진" />
            </div>
          
          </div>
        </div>
        
        {/*버튼영역*/}
        <div id="buttonWrapper" className='flex justify-between pt-10 pl-5 pr-5 pb-5'>
          <div id="left" className='flex gap-2'>
            <Button>전자결재</Button>
            <Button>전자결재취소</Button>
          </div>
          
          <div id="right" className='flex gap-2'>
            <Button>재작성</Button>
            <Button>신규</Button>
            <Button>삭제</Button>
            <Button>저장</Button>
          </div>
        </div>
        
        
      </div>
    </div>
  )
}