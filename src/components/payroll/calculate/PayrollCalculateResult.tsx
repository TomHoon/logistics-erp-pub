'use client'

import { clsx } from 'clsx';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ChevronDownIcon, Loader2, Search, UserSearch } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import {
  Dialog, DialogClose,
  DialogContent,
  DialogDescription, DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Field, FieldGroup } from '@/components/ui/field';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';

export default function PayrollCalculateResult() {
  return (
    <div className={clsx(
      'w-[1148px] mx-auto mt-10 bg-[#fff] p-10 rounded-lg'
    )}>
      <div className='pt-5 text-[20px] font-[700]'>
        <p>급여계산</p>
      </div>
      
      <div className='grid grid-cols-4 mt-10 gap-5 items-center'>
        
        <div className='flex gap-5 justify-center'>
          <span>* 급여년월</span>
          <Popover>
            <PopoverTrigger>
              <div className='flex justify-center items-center'>
                {<span>Pick a date</span>}
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
        
        <div className='flex gap-5 justify-center'>
          <span>* 지급기준일</span>
          <Popover>
            <PopoverTrigger>
              <div className='flex justify-center items-center'>
                {<span>Pick a date</span>}
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
        
        <div className='flex gap-5 justify-center items-center'>
          <span>* 사원번호</span>
          <Dialog>
            <form>
              <DialogTrigger className='flex items-center gap-3'>
                <Button variant="outline" className='w-[100px]'>
                
                </Button>
                <Search size={16} />
              </DialogTrigger>
              
              <DialogContent className="sm:max-w-sm">
                <div className='relative'>
                  <Loader2 className="w-10 h-10 animate-spin absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[-100px]" />
                </div>
                
                <DialogHeader>
                  <DialogTitle>사원찾기</DialogTitle>
                  <DialogDescription>
                    사원을 검색해보세요
                  </DialogDescription>
                </DialogHeader>
                
                <FieldGroup>
                  <Field>
                    <Label htmlFor="name-1">사원명/사원번호</Label>
                    <Input id="name-1" name="name" defaultValue="" placeholder='L001234' />
                  </Field>
                  
                  <Field>
                    <div className='flex flex-col gap-2'>
                      <ul id="colWrapper" className='flex w-full gap-2'>
                        <li className='flex-1'>No</li>
                        <li className='flex-1'>사원번호</li>
                        <li className='flex-1'>사원명</li>
                      </ul>
                      
                      <ul id="rowWrapper" className='flex w-full'>
                        <li className={clsx(
                          'flex w-full gap-2',
                        )}>
                          <span className='flex-1'>01</span>
                          <span className='flex-1'>L001234</span>
                          <span className='flex-1'>김정훈</span>
                        </li>
                      </ul>
                    </div>
                  </Field>
                </FieldGroup>
                
                <DialogFooter>
                  <DialogClose>
                    <Button variant="outline">취소</Button>
                  </DialogClose>
                  <Button type="submit">선택</Button>
                </DialogFooter>
                
              </DialogContent>
              
            </form>
          </Dialog>
          
          {/*<Popover>*/}
          {/*  <PopoverTrigger>*/}
          {/*    <div className='flex justify-center items-center gap-3'>*/}
          {/*      <Input readOnly={true} className='w-[90px]'/>*/}
          {/*      <Search size={16} />*/}
          {/*    </div>*/}
          {/*  </PopoverTrigger>*/}
          {/*  <PopoverContent className="w-auto p-0" align="start">*/}
          {/*    <Calendar*/}
          {/*      mode="single"*/}
          {/*      selected={new Date()}*/}
          {/*      onSelect={undefined}*/}
          {/*      defaultMonth={new Date()}*/}
          {/*    />*/}
          {/*  </PopoverContent>*/}
          {/*</Popover>*/}
        </div>
        
        <div className='flex gap-5 justify-center'>
          <span>16500</span>
        </div>
        
        
      </div>
      
      <div id='buttonWrapper' className='flex justify-end mt-10'>
        <Button variant='outline'>급여계산</Button>
      </div>
      
    </div>
  )
}