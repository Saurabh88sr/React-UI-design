import imag1 from "../../img/imag1.jpeg";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
const ImageCard = () => {
  return (
    <div className="max-w-sm rounded-3xl p-3 overflow-hidden shadow-lg bg-white hover:-my-3 duration-500">
      <div className="px-2 py-4">
        <div className="flex justify-between">
          <h2 className="font-bold text-xl mb-2">Main Heading</h2>
          <div className="text-white p-2 rounded-full bg-gray-700">
            <ArrowOutwardOutlinedIcon />
          </div>
        </div>
        <p className="text-gray-700 text-base">
          This is a brief description of the card. You can use this space to
          summarize the content or purpose of the card.
        </p>
      </div>

      <img className="w-full p-2 rounded-3xl" src={imag1} alt="Sample Image" />
    </div>
  );
};

export default ImageCard;
