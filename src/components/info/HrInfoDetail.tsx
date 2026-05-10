'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import s from "./HrInfo.module.css"
import { Button } from "@/components/ui/button"
import { useState } from 'react';
import PersonalTab from '@/components/info/tabs/PersonalTab';
import FamiliyTab from '@/components/info/tabs/FamiliyTab';
import StudyTab from '@/components/info/tabs/StudyTab';
import LanguageTab from '@/components/info/tabs/LanguageTab';
import QualificationTab from '@/components/info/tabs/QualificationTab';
import CareerTab from '@/components/info/tabs/CareerTab';
import MilitaryTab from '@/components/info/tabs/MilitaryTab';

const defaultTabs = [
  '인적사항', '가족사항', '학력정보', '어학정보', '자격증', '경력정보', '병역정보'
]


export function HrInfoDetail() {
  const [activeTab, setActiveTab] = useState('인적사항')
  
  const getTabContent = (tab: string) => {
    
    switch (tab) {
      case '인적사항':
        return <PersonalTab/>;
      case '가족사항':
        return <FamiliyTab/>;
      case '학력정보':
        return <StudyTab/>;
      case '어학정보':
        return <LanguageTab/>;
      case '자격증':
        return <QualificationTab/>;
      case '경력정보':
        return <CareerTab/>;
      case '병역정보':
        return <MilitaryTab/>;
    }
    
  }
  
  return (
    <div className={s.container}>
      <Tabs defaultValue="account" className="w-full">
        <TabsList variant="line">
          {defaultTabs.map(tab => (
            <TabsTrigger key={tab} value={tab} className='cursor-pointer' onClick={() => setActiveTab(tab)}>
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
      
      { activeTab === '인적사항' && (
        <div className='flex gap-2 justify-end mt-5'>
          <Button size='lg' variant="secondary">입사자등록</Button>
          <Button variant='destructive'>저장</Button>
        </div>
      )}
      
    </div>
  )
}