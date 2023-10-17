import Style from './index.module.scss';

const Detail = () => {
  return (
    <div className='flex justify-center'>
      <textarea className={`${Style.textarea} rounded-md`}></textarea>
    </div>
  );
};

export default Detail;
