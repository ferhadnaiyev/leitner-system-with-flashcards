import classNames from 'classnames';
import Link from "next/link";
import pageStyles from './page.module.css';
import linkStyles from './styles/link.module.css';


export default function Home() {

  return (

    <main className={classNames(pageStyles.main)}>

      <div className={classNames(pageStyles.container)}>

        <Link href='/learning' className={classNames(linkStyles.link)}>
          Learn New Words
        </Link>
        <Link href='/repetition' className={classNames(linkStyles.link)}>
          Repeat to remember
        </Link>

      </div>


    </main>
  );
}
