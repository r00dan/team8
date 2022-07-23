import { Chat, PageLayout } from 'components';

import style from './Main.module.scss';

export interface IMainProps {}

export function Main({}: IMainProps) {
  return (
    <PageLayout>
      <div
        className={style.root}
      >
        <Chat />
      </div>
    </PageLayout>
  );
}