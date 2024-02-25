
interface Props{
    text:string,
    link:string
}

export default function Link({text,link}:Props) {
  return (
    <a className="hover:text-brandColor transition-all duration-300" href={link}>
      {text}
    </a>
  );
}
