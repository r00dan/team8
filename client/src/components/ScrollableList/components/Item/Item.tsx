import style from './Item.module.scss';

export interface IItemProps {
  tooltip: string;
  value: string;
  showText?: boolean;
  onClick?: () => void;
}

export function Item({
  tooltip,
  value,
  showText = true,
  onClick,
}: IItemProps) {
  return (
    <div
      className={style.root}
      onClick={onClick}
    >
      <div
        className={style.item}
        title={tooltip}
      >
        {value}
      </div>
      {showText && (
        <div className={style.name}>{tooltip}</div>
      )}
    </div>
  );
}