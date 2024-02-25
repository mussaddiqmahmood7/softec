
interface Props{
    text:string,
    link:string
}

export default function Link({text,link}:Props) {
  return (
    <a onClick={() => {
     
    }} className="border-b border-[#E5E7EB] py-3 hover:text-brandColor transition-all duration-300 px-2" href={link}>
      {text}
    </a>
  );
}
