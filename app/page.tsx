import classNames from 'classnames';
import pageStyles from './page.module.css';
import BoxContainer from '@/components/BoxContainer';




export default function Home() {


  return (

    <main className={classNames(pageStyles.main)}>
      <h1>
        WELCOME!
      </h1>
      <BoxContainer />

    </main>
  );
}
