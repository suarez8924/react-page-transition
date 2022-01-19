import gsap from 'gsap/all';
import { useEffect } from 'react/cjs/react.development';
import { ReactComponent as CloseIcon } from '../../assets/svg/close.svg';
import './modal.scss';

const Modal = ({ className, children, setIsModalOpen }) => {
  useEffect(() => {
    document.querySelector('body').style.overflow = 'hidden';
    document.querySelector('body').style.height = '100vh';

    gsap.from('.modal-content', {
      opacity: 0,
      yPercent: 10,
      delay: 0.3,
      duration: 1,
      ease: 'expo.out',
    });

    return () => {
      document.querySelector('body').style = '';
    };
  }, []);

  return (
    <div className={`modal ${className}`}>
      <button className='close-button' onClick={() => setIsModalOpen(false)}>
        <CloseIcon />
      </button>
      <div className='modal-content'>{children}</div>
    </div>
  );
};

export default Modal;
