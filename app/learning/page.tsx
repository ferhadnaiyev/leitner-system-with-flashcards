import WordInput from "@/components/WordInput";
import classNames from 'classnames';
import pageStyles from './page.module.css';
export default function LearningPage() {
    return (
        <main className={classNames(pageStyles.container)}>
            <WordInput />
        </main>
    );
};