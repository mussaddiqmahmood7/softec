interface ButtonData {
  text: string;
}

function Button({ text,  }: ButtonData) {
  
  return (
    <button className={`flex items-center justify-center gap-2 transition-all duration-700 leading-normal lg:leading-normal bg-green-400 border border-green-500 text-white hover:bg-white hover:text-green-500 rounded-xl w-full px-4 py-1 `}>
      <p>{text}</p> 
    </button>
  );
}
export default Button;