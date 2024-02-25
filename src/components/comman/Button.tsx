interface ButtonData {
  text: string;
  active: boolean
}

function Button({ text, active  }: ButtonData) {
  
  return (
    <button className={`flex items-center justify-center gap-2 transition-all duration-700 leading-normal lg:leading-normal ${active?"border-green-500 bg-green-400 hover:bg-white hover:text-green-500":" bg-gray-500 "} border text-white rounded-xl w-full px-4 py-1 `}>
      <p>{text}</p> 
    </button>
  );
}
export default Button;