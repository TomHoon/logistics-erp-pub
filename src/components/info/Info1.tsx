import s from '@/components/info/HrInfo.module.css';
import { Camera } from 'lucide-react';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export default function Info1(){
  return (
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
  )
}