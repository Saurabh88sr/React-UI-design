import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { setImageCount } from '../store/feature/UserSlice';

const Footer = () => {
  const { imagecount } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const incrementImageCount = () => {
    dispatch(setImageCount(!imagecount));
  };

  const decrementImageCount = () => {
    dispatch(setImageCount(!imagecount));
  };

  console.log("imagecount", imagecount);

  return (
    <div>
      <header className=" bottom-0 p-6 z-10 w-full">
        <div className="flex justify-between">
          <ul className="flex w-1/2 justify-around gap-6 uppercase">
            <li className="footertext">facebook</li>
            <li className="footertext">instagram</li>
            <li className="footertext">pinterest</li>
            <li className="footertext">youtube</li>
          </ul>
          <div className="flex gap-3">
            {/* Decrement Button */}
            <div 
              onClick={decrementImageCount} 
              className="footertext bg-white/20 hover:bg-white/40  p-2 rounded-full rotate-180 cursor-pointer"
            >
              <KeyboardDoubleArrowRightOutlinedIcon />
            </div>
            {/* Increment Button */}
            <div 
              onClick={incrementImageCount} 
              className="footertext bg-white/20 hover:bg-white/40 p-2 rounded-full cursor-pointer"
            >
              <KeyboardDoubleArrowRightOutlinedIcon />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Footer;
