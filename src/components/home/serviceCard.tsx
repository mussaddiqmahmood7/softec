interface Props {
  image: string;
  title: string;
  description: string;
}
function Card({ image, title, description }: Props) {
  return (
    <div className="p-5 rounded-2xl bg-white relative flex flex-col justify-start items-start gap-4 lg:gap-3 xl:gap-4 w-full h-full min-h-[342px]  overflow-hidden border border-[#EFF0F6] transition-all duration-500 hover:shadow-2xl leading-normal lg:leading-normal">
      <div className="w-full h-1/2 max-h-[50%] min-h-[50%] rounded-xl overflow-hidden"> <img src={image}  alt="Logo" width="100%" height="auto" className="object-cover" /></div>  
      <p className="text-[28px] font-bold max-w-sm text-center leading-normal lg:leading-normal">{title}</p>
      <p className="text-base  md:max-w-[320px] text-start leading-normal lg:leading-normal text-Grey">{description}</p>
    </div>
  );
}

export default Card;