import Style from './index.module.scss';

const Detail = () => {
  return (
    <div className='flex justify-center'>
      <textarea
        className={`${Style.textarea} rounded-md dark:bg-slate-500 bg-slate-600 to-blue-500 p-4  text-pink-200  dark:text-slate-400`}
      ></textarea>
    </div>
  );
};

export default Detail;
