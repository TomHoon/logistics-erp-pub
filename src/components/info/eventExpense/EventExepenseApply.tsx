import SearchComponent from '@/components/common/SearchComponent';
import ViewTable from '@/components/common/ViewTable';
import EventExpenseApplyForm from '@/components/info/eventExpense/EventExpenseApplyForm';
import { Button } from '@/components/ui/button';

export default function EventExpenseApply(){
  return (
    <div>
      <SearchComponent/>
      <ViewTable/>
      <EventExpenseApplyForm/>
      
    </div>
  )
}