'use client';

import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { ChevronDownIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const certificateTypes = [
  '재직증명서',
  '경력증명서',
  '퇴직증명서',
  '급여증명서',
  '원천징수영수증',
  '근로소득원천징수영수증',
  '휴직증명서',
  '출장증명서',
];

export default function CertificateIssueForm() {
  const [date, setDate] = useState<Date>()
  
  return (
    <div
      className="
        w-[1148px] m-auto mt-10 bg-[#fff] rounded-[15px]
      "
    >
      <div
        id="titleWrapper"
        className="
          pl-10 pr-10 font-[700] text-[17px]
          pt-10
        "
      >
        <p>증명서신청</p>
      </div>
      
      <div id='formWrapper' className='flex gap-5 flex-wrap p-10'>
        <Field className='w-[250]'>
          <FieldLabel htmlFor="신청번호">신청번호</FieldLabel>
          <Input id="신청번호" type="text" placeholder="L0001" />
        </Field>
        
        <Field className='w-[250]'>
          <FieldLabel htmlFor="신청번호">증명서구분</FieldLabel>
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="증명서선택" />
            </SelectTrigger>
            
            <SelectContent>
              {certificateTypes.map((type, index) => (
                <SelectItem value={type} key={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        
        <Field className='w-[250]'>
          <FieldLabel htmlFor="신청번호">신청일자</FieldLabel>
          <Popover>
            <PopoverTrigger className='flex'>
              <Button
                variant="outline"
                data-empty={!date}
                className="w-[212px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
              >
                {date ? format(date, "PPP") : <span>Pick a date</span>}
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                defaultMonth={date}
              />
            </PopoverContent>
          </Popover>
        </Field>
        
        <Field className='w-[250]'>
          <FieldLabel htmlFor="사원번호">사원번호</FieldLabel>
          <Input id="사원번호" type="text" placeholder="L0001" />
        </Field>
        
        <Field className='w-[250]'>
          <FieldLabel htmlFor="성명">성명</FieldLabel>
          <Input id="성명" type="text" placeholder="L0001" />
        </Field>
        
        <Field className='w-[250]'>
          <FieldLabel htmlFor="부서">부서</FieldLabel>
          <Input id="부서" type="text" placeholder="L0001" />
        </Field>
        
        <Field className='w-[250]'>
          <FieldLabel htmlFor="직책">직책</FieldLabel>
          <Input id="직책" type="text" placeholder="L0001" />
        </Field>
        
        <Field className='w-[250]'>
          <FieldLabel htmlFor="직책">결재상태</FieldLabel>
          <Input id="직책" type="text" placeholder="L0001" />
        </Field>
        
        <Field className='w-full'>
          <FieldLabel htmlFor="신청번호">용도</FieldLabel>
          <Input id="신청번호" type="text" placeholder="L0001" className='h-[45px]'/>
        </Field>
        
      </div>
      
      <div id='buttonWrapper' className='flex justify-between p-10'>
        <div id="buttonLeft" className='flex gap-3'>
          <Button>전자결재</Button>
          <Button>인쇄</Button>
        </div>
        
        <div id="buttonRight" className='flex gap-2'>
          <Button>신규</Button>
          <Button>삭제</Button>
          <Button>저장</Button>
        </div>
      </div>
    </div>
  )
}