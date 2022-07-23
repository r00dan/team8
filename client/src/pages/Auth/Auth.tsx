import { PageLayout } from 'components';

import style from './Auth.module.scss';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';

export interface IAuthProps {}

export function Auth({}: IAuthProps) {
  return (
    <PageLayout
      isAuth
    >
      <div
        className={style.root}
      >
        <div className={style.blocks}>
          <div className={style.leftBlock}>
            <SignIn />
          </div>
          <div className={style.rightBlock}>
            <SignUp />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}