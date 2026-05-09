'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import s from "./HrInfo.module.css"
import { CalendarIcon, Camera, ChevronDownIcon, X } from 'lucide-react';
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from 'react';
import { format } from 'date-fns';

const defaultTabs = [
  '인적사항', '가족사항', '학력정보', '어학정보', '자격증', '경력정보'
]

export function HrInfoDetail() {
  
  const [date, setDate] = useState<Date>()
  
  
  const getTabContent = (tab: string) => {
    const 인적사항 =
        <div className={s.contentContainer}>
          
          {/*정보란1*/}
          <div className={s.info1}>
            <div className={s.imageCircle}>
              <Camera color='#A3A3A3'/>
              {/*<X className='absolute top-5 right-5' size={14} color='#A3A3A3'/>*/}
            </div>
            
            <div className={s.info1Form}>
              <Field className='w-[200]'>
                <FieldLabel htmlFor="사원번호">사원번호</FieldLabel>
                <Input id="사원번호" type="text" placeholder="L0001" />
              </Field>
              
              <Field className='w-[200]'>
                <FieldLabel htmlFor="성명">성명</FieldLabel>
                <Input id="성명" type="text" placeholder="홍길동" />
              </Field>
              
              <Field className='w-[200]'>
                <FieldLabel htmlFor="주민번호">주민번호</FieldLabel>
                <Input id="주민번호" type="text" placeholder="010627-30*****" />
              </Field>
              
              <Field className='w-[200]'>
                <FieldLabel htmlFor="결혼유무">결혼유무</FieldLabel>
                <RadioGroup defaultValue="comfortable" className="w-fit">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="기혼" id="r1" />
                    <Label htmlFor="r1">기혼</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="미혼" id="r2" />
                    <Label htmlFor="r2">미혼</Label>
                  </div>
                </RadioGroup>
              </Field>
            </div>
          </div>

          {/*정보란2*/}
          <div className={s.info2}>
            <div className='w-full flex'>
              <Field>
                <FieldLabel>자택주소</FieldLabel>
                
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="우편번호"
                    className="w-[120px]"
                  />
                  
                  <Input
                    type="text"
                    placeholder="상세주소1"
                    className="flex-1"
                  />
                </div>
                
                <Input
                  type="text"
                  placeholder="상세주소2"
                  className="flex-1"
                />
              </Field>
            </div>
            
            <div className='flex w-full gap-10'>
              <Field className='flex-1'>
                <FieldLabel htmlFor="이메일">이메일</FieldLabel>
                <Input id="이메일" type="email" placeholder="abc@gmail.com" />
              </Field>
              
              <Field className='flex-1'>
                <FieldLabel htmlFor="휴대폰">휴대폰</FieldLabel>
                <Input id="휴대폰" type="text" placeholder="01050509090" />
              </Field>
              
            </div>
            
          </div>
          
          {/*정보란3*/}
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
            
            <Field className='w-[200]'>
              <FieldLabel htmlFor="퇴직일자">퇴직일자</FieldLabel>
              <Popover>
                <PopoverTrigger>
                  <Button
                    variant="outline"
                    data-empty={!date}
                    className="w-[212px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
                  >
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                    <ChevronDownIcon />
                  </Button>
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

        </div>
    
    
    if (tab === '인적사항') return 인적사항;
    
  }
  
  return (
    <div className={s.container}>
      <Tabs defaultValue="account" className="w-full">
        <TabsList variant="line">
          {defaultTabs.map(tab => (
            <TabsTrigger key={tab} value={tab} className='cursor-pointer'>
              <span className='text-[20px] font-bold'>
                {tab}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
        
        {defaultTabs.map(tab => (
          <TabsContent className='w-full px-[10px]' key={`${tab}-content`} value={tab}>{getTabContent(tab)}</TabsContent>
        ))}
      
      </Tabs>
      
      <div className='flex gap-2 justify-end mt-5'>
        <Button size='lg' variant="secondary">입사자등록</Button>
        <Button variant='destructive'>저장</Button>
      </div>
      
    </div>
  )
}