import { Input, Button, Message } from 'components';

import style from './Chat.module.scss';

export interface IChatProps {}

export function Chat({}: IChatProps) {
  return (
    <div
      className={style.root}
    >
      <div className={style.messages}>
        <Message
          username='bo'
          date={new Date().toLocaleString('ru-RU')}
          value='привет'
        />
        <Message
          username='bo'
          date={new Date().toLocaleString('ru-RU')}
          value='это статика'
        />
        <Message
          username='bo'
          date={new Date().toLocaleString('ru-RU')}
          value='тестовая'
        />
        <Message
          username='devyatkina'
          date={new Date().toLocaleString('ru-RU')}
          value='привет'
        />
        <Message
          username='devyatkina'
          date={new Date().toLocaleString('ru-RU')}
          value='werwer'
        />
        <Message
          username='devyatkina'
          date={new Date().toLocaleString('ru-RU')}
          value='asdawd'
        />
      </div>
      <div className={style.inputGroup}>
        <div className={style.input}>
          <Input
            id='message'
            placeholder='Message'
            value={''}
            onChange={() => { }}
          />
        </div>
        <div className={style.stickers}>
          <Button
            value='🤣'
            onClick={() => { }}
          />
        </div>
      </div>
    </div>
  );
}