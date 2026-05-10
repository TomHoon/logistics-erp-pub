import s from '@/components/info/HrInfo.module.css';
import Info1 from '@/components/info/Info1';
import Info2 from '@/components/info/Info2';
import Info3 from '@/components/info/Info3';

export default function PersonalTab() {
  return (
    <div className={s.contentContainer}>
      {/*정보란1*/}
      <Info1 />
      
      {/*정보란2*/}
      <Info2 />
      
      {/*정보란3*/}
      <Info3 />
    </div>
  )
}