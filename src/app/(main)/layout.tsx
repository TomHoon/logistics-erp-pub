import Aside from '@/components/common/Aside';
import Nav from '@/components/common/Nav';
import s from '@/components/common/Home.module.css';

export default function MainLayout({children}: {
  children: React.ReactNode;
}) {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Aside />
        <section className='flex flex-col'>
          <Nav/>
          {children}
        </section>
      </div>
    </div>
  );
}