import Aside from './Aside';
import s from './Home.module.css';
import Main from './Main';

export default function Home() {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Aside />
        <Main />
      </div>
    </div>
  );
}
