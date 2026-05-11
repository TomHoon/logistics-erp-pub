'use client'

import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { ChevronDownIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';

export default function PayrollRegisterForm() {
  const [date, setDate] = useState<Date>();
  
  return (
    <div className='w-[1148px] bg-[#fff] rounded-[15px] ml-auto mr-auto mt-10'>
      
      <div className='pt-5 pl-5 text-[20px] font-[700]'>
        <p>상세정보</p>
      </div>
      
      <div id="payrollForm">
        
        {/*은행기입란*/}
        <div className='grid grid-cols-3 gap-4 p-5'>
          <div className='flex gap-2'>
            <span className='flex-1 text-right'>* 은행</span>
            <Input type='text' className='flex-1'/>
          </div>
          
          <div className='flex gap-2 items-center'>
            <span className='flex-1 text-right'>* 계좌번호</span>
            <Input type='text' className='flex-1'/>
          </div>
          
          <div className='flex gap-2 items-center'>
            <span className='flex-1 text-right'>* 예금주</span>
            <Input type='text' className='flex-1'/>
          </div>
          
          <div className='flex gap-2 items-center'>
            <span className='flex-1 text-right'>퇴직금기산일</span>
            <Input type='text' className='flex-1'/>
          </div>
        </div>
        
        
        
        {/*국민연금*/}
        <div className='grid grid-cols-3 gap-4 p-5'>
          <div className='flex gap-2 row-span-2 justify-end text-right items-center'>
            <span>국민연금</span>
            <div className='flex gap-2'>
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="선택" />
                </SelectTrigger>
                
                <SelectContent>
                  <SelectItem value='자동계산'>
                    자동계산
                  </SelectItem>
                  <SelectItem value='보수월액기준'>
                    보수월액기준
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className='flex row-span-2 gap-2 justify-end text-right items-center'>
            <span>기준소득월액</span>
            <div className='flex gap-2'>
              <Input type='text' className='flex-1'/>
            </div>
          </div>
          
          <div className='flex flex-col gap-2 justify-end text-right items-center row-span-2'>
            <div className='flex gap-3 w-full'>
              <span className='text-right flex-1'>취득일자</span>
              <div className='flex gap-2 flex-1 justify-center'>
                <Popover>
                  <PopoverTrigger>
                    <div className='flex'>
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
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
            </div>
            
          <div className='flex gap-3 w-full'>
            <span className='text-right flex-1'>상실일자</span>
              <div className='flex gap-2 flex-1 justify-center'>
                <Popover>
                  <PopoverTrigger>
                    <div className='flex'>
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
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
            </div>
          </div>
        </div>
        
        {/*건강보험*/}
        <div className='grid grid-cols-3 gap-4 p-5'>
          <div className='flex gap-2 row-span-2 justify-end text-right items-center'>
            <span>건강보험</span>
            <div className='flex gap-2'>
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="선택" />
                </SelectTrigger>
                
                <SelectContent>
                  <SelectItem value='자동계산'>
                    자동계산
                  </SelectItem>
                  <SelectItem value='보수월액기준'>
                    보수월액기준
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className='flex row-span-2 gap-2 justify-end text-right items-center'>
            <span>기준소득월액</span>
            <div className='flex gap-2'>
              <Input type='text' className='flex-1'/>
            </div>
          </div>
          
          <div className='flex flex-col gap-2 justify-end text-right items-center row-span-2'>
            <div className='flex gap-3 w-full'>
              <span className='text-right flex-1'>취득일자</span>
              <div className='flex gap-2 flex-1 justify-center'>
                <Popover>
                  <PopoverTrigger>
                    <div className='flex'>
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
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
            </div>
            
            <div className='flex gap-3 w-full'>
              <span className='text-right flex-1'>상실일자</span>
              <div className='flex gap-2 flex-1 justify-center'>
                <Popover>
                  <PopoverTrigger>
                    <div className='flex'>
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
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
            </div>
          </div>
        </div>
        
        {/*고용보험*/}
        <div className='grid grid-cols-3 gap-4 p-5'>
          <div className='flex gap-2 row-span-2 justify-end text-right items-center'>
            <span>고용보험</span>
            <div className='flex gap-2'>
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="선택" />
                </SelectTrigger>
                
                <SelectContent>
                  <SelectItem value='자동계산'>
                    자동계산
                  </SelectItem>
                  <SelectItem value='보수월액기준'>
                    보수월액기준
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className='flex row-span-2 gap-2 justify-end text-right items-center'>
            <span>기준소득월액</span>
            <div className='flex gap-2'>
              <Input type='text' className='flex-1'/>
            </div>
          </div>
          
          <div className='flex flex-col gap-2 justify-end text-right items-center row-span-2'>
            <div className='flex gap-3 w-full'>
              <span className='text-right flex-1'>취득일자</span>
              <div className='flex gap-2 flex-1 justify-center'>
                <Popover>
                  <PopoverTrigger>
                    <div className='flex'>
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
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
            </div>
            
            <div className='flex gap-3 w-full'>
              <span className='text-right flex-1'>상실일자</span>
              <div className='flex gap-2 flex-1 justify-center'>
                <Popover>
                  <PopoverTrigger>
                    <div className='flex'>
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
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
            </div>
          </div>
        </div>
        
        
        
      </div>
    </div>
  )
}