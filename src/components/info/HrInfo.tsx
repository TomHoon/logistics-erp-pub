'use client';

import SearchComponent from '@/components/common/SearchComponent';
import SearchResultList from '@/components/common/SearchResultList';
import { HrInfoDetail } from '@/components/info/HrInfoDetail';

export default function HrInfo() {
  return (
    <>
      <SearchComponent/>
      <SearchResultList heightSize='M'/>
      <HrInfoDetail/>
    </>
  )
}