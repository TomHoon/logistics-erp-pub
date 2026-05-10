import s from '@/components/info/HrInfo.module.css';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export default function Info2() {
  return (
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
  )
}