import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";

const ChoiceCard = () => {
  return (
    <div className="relative group my-3">
      <div className="bg-blue-900 w-24 h-12 absolute -top-6 group-hover:-top-2 group-hover:-right-1 right-6 duration-500 flex justify-center items-center text-white rounded-lg shadow-lg">
        <AccessAlarmOutlinedIcon />
      </div>
      <div className="bg-white p-5 rounded-lg shadow-lg hover:border-t-4 hover:border-blue-900 hover:-m-2 transiction duration-500 ">
        {/* <div className="bg-[#21314a] p-2 text-white max-w-min rounded-lg">
          <AccessAlarmOutlinedIcon />
        </div> */}
        <h2 className="text-lg font-bold my-2">24/7 Support</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis
          voluptate quidem esse sapiente voluptatum id alias quam obcaecati
          molestias?
        </p>
        <button className="p-1 border-none  ">Read More</button>
      </div>
    </div>
  );
};

export default ChoiceCard;
