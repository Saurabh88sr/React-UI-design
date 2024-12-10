import ImageCard from "../../component/card/imageCard";

const MultipleCard = () => {
  return (
    <div>
      <div className=" text-center pb-10">
          <h2 className="text-4xl font-semibold">Multi Card Section</h2>
        </div>
      <div className="grid sm:grid-cols-3 justify-around place-items-center">
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </div>
  );
};

export default MultipleCard;
