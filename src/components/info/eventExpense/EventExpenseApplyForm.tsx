'use client';

import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function EventExpenseApplyForm() {
  const [date, setDate] = useState<Date>()
  
  return (
    <div className='w-[1148px] m-auto mt-10 bg-[#fff] rounded-[15px]'>
      
      <div id='formWrapper' className='flex gap-5 flex-wrap p-10'>
        <Field className='w-[250]'>
          <FieldLabel htmlFor="신청번호">신청번호</FieldLabel>
          <Input id="신청번호" type="text" placeholder="L0001" />
        </Field>
        
        <Field className='w-[250]'>
          <FieldLabel htmlFor="신청번호">신청자사번</FieldLabel>
          <Input id="신청번호" type="text" placeholder="L0001" />
        </Field>
        
        <Field className='w-[250]'>
          <FieldLabel htmlFor="신청번호">신청자성명</FieldLabel>
          <Input id="신청번호" type="text" placeholder="L0001" />
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
          <FieldLabel htmlFor="신청번호">경조구분</FieldLabel>
          <Input id="신청번호" type="text" placeholder="L0001" />
        </Field>
        
        <Field className='w-[250]'>
          <FieldLabel htmlFor="신청번호">가족관계</FieldLabel>
          <Input id="신청번호" type="text" placeholder="L0001" />
        </Field>
        
        <Field className='w-[250]'>
          <FieldLabel htmlFor="신청번호">대상자 성명</FieldLabel>
          <Input id="신청번호" type="text" placeholder="L0001" />
        </Field>
        
        <Field className='w-[250]'>
          <FieldLabel htmlFor="신청번호">경조일자</FieldLabel>
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
          <FieldLabel htmlFor="신청번호">신청금액</FieldLabel>
          <Input id="신청번호" type="number" placeholder="L0001" />
        </Field>
        
        <Field className='w-[250]'>
          <FieldLabel htmlFor="신청번호">경조장소</FieldLabel>
          <Input id="신청번호" type="text" placeholder="L0001" />
        </Field>
        
        <Field className='w-[250]'>
          <FieldLabel htmlFor="신청번호">은행</FieldLabel>
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="은행 선택" />
            </SelectTrigger>
            
            <SelectContent>
              <SelectItem value="농협">
                농협은행
              </SelectItem>
              
              <SelectItem value="하나">
                하나은행
              </SelectItem>
            </SelectContent>
          </Select>
        </Field>
        
        <Field className='w-[250]'>
          <FieldLabel htmlFor="신청번호">계좌번호</FieldLabel>
          <Input id="신청번호" type="text" placeholder="L0001" />
        </Field>
        
        <Field className='w-[250]'>
          <FieldLabel htmlFor="신청번호">예금주</FieldLabel>
          <Input id="신청번호" type="text" placeholder="L0001" />
        </Field>
        
        <Field className='w-[250]'>
          <FieldLabel htmlFor="신청번호">비고</FieldLabel>
          <Input id="신청번호" type="text" placeholder="L0001" />
        </Field>
        
        <Field className='w-[250]'>
          <FieldLabel htmlFor="신청번호">결재상태</FieldLabel>
          <Input id="신청번호" type="text" placeholder="L0001" />
        </Field>
      </div>
      
      <div id='buttonWrapper' className='flex justify-between p-10'>
        <div id="buttonLeft">
          <Button>전자결재</Button>
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