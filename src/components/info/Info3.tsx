import s from '@/components/info/HrInfo.module.css';
import { Field, FieldLabel } from '@/components/ui/field';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { ChevronDownIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';

export default function Info3() {
  const [date, setDate] = useState<Date>()
  
  return (
    <div className={s.info3}>
      <Field className="w-[250px]">
        <FieldLabel>급여계약기준</FieldLabel>
        
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="선택" />
          </SelectTrigger>
          
          <SelectContent>
            <SelectItem value="연봉제">연봉제</SelectItem>
            <SelectItem value="시급제">시급제</SelectItem>
            <SelectItem value="월급제">월급제</SelectItem>
            <SelectItem value="일급제">일급제</SelectItem>
          </SelectContent>
        </Select>
      </Field>
      
      <Field className='w-[200]'>
        <FieldLabel htmlFor="부서">부서</FieldLabel>
        <Input id="부서" type="text" placeholder="사업팀" />
      </Field>
      
      <Field className='w-[200]'>
        <FieldLabel htmlFor="직급">직급</FieldLabel>
        <Input id="직급" type="text" placeholder="대리" />
      </Field>
      
      <Field className='w-[200]'>
        <FieldLabel htmlFor="입사일자">입사일자</FieldLabel>
        <Popover>
          <PopoverTrigger>
            <div
              data-empty={!date}
              className="w-[150px] flex justify-between text-left font-normal data-[empty=true]:text-muted-foreground border-[1px] rounded-[5px] pt-2 pl-1 pb-1"
            >
              {date ? format(date, "PPP") : <span>Pick a date</span>}
              <ChevronDownIcon />
            </div>
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
      
      <Field className='w-[200]'>
        <FieldLabel htmlFor="퇴직일자">퇴직일자</FieldLabel>
        <Popover>
          <PopoverTrigger>
            <div
              data-empty={!date}
              className="w-[150px] flex justify-between text-left font-normal data-[empty=true]:text-muted-foreground border-[1px] rounded-[5px] pt-2 pl-1 pb-1"
            >
              {date ? format(date, "PPP") : <span>Pick a date</span>}
              <ChevronDownIcon />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              defaultMonth={date}
            />
          </PopoverContent>
        </Popover>
      </Field>
    
    </div>
  
  
  )
}