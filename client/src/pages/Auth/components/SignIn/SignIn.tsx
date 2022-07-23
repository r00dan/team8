import { Button, ButtonThemes, Input } from 'components';

import style from './SignIn.module.scss';

export interface ISignInProps {}

export function SignIn({}: ISignInProps) {
  return (
    <div
      className={style.root}
    >
      <div className={style.inputGroup}>
        <div className={style.input}>
          <Input
            id='signin-username'
            value=''
            label='Username'
            onChange={() => { }}
          />
        </div>
        <div className={style.input}>
          <Input
            id='signin-password'
            value=''
            label='Password'
            type="password"
            onChange={() => { }}
          />
        </div>
        <div className={style.input}>
          <Button
            value='Sign In'
            theme={ButtonThemes.PRIMARY}
            onClick={() => { }}
          />
        </div>
      </div>
    </div>
  );
}