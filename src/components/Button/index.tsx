import style from './style.module.css';

export default function Button({children}: any) {
  return (
    <>
      <button className={style.button} >{children}</button>
    </>
  );
}
