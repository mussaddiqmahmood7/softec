interface Props {
    text: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    validError: boolean[];
    setValidError: React.Dispatch<React.SetStateAction<boolean[]>>;
    valid: "name" | "email"  | "password" | "password2";
  }
  import { useEffect, useState} from "react";
  
  
  function Input({
    text,
    value,
    setValue,
    validError,
    setValidError,
    valid,
  }: Props) {
  
    let input;
    const [error, setError] = useState(false);
  
    const regex =  {
      name: /^[A-Za-z\s]{3,30}$/,
      email: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-zA-Z0-9]{2,})$/,
      password: /.*/,
      password2: /.*/,
    } 
  
    
  
    useEffect(() => {
      if (value === "") {
        setError(false);
        return;
      }
      const index = [
        "name",
        "email",
        "password",
        "password2",
      ].indexOf(valid)
  
      const isValid = regex[valid].test(value);
  
      setError(!isValid);
      const errors = [...validError];
      errors[index] = isValid;
      setValidError(errors);
    }, [value]);
  
    
  
    function handleOnChange(event: any) {
      const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    
      if (target) {
        setValue(target.value);
      }
    }
    
    
    

    return <div className="w-full h-full">
    <div className="relative  ">
      <input
        id={valid}
        placeholder={text}
        value={value}
        onInput={(event) => {
          handleOnChange(event);
        }}
        className="peer py-3 px-2 focus:outline-none border  focus:ring-0 bg-white w-full rounded-lg  h-full"
      />
      <p
        className={`text-sm text-red-500 transition-all duration-500 ${
          error ? "max-h-fit opacity-100" : "h-0 opacity-0"
        }`}
      >
        * Not Valid
      </p>
    </div></div>;
  }
  
  export default Input;