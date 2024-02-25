interface Props {
    type:
      | "simple"
      | "select"
      | "description"
      | "simpleContact"
      | "descriptionContact";
    text: string;
    value: string;
    setValue: StateUpdater<string>;
    validError: boolean[];
    contactPage: boolean;
    setValidError: StateUpdater<boolean[]>;
    valid: "name" | "email" | "phone" | "description" | "socialMedia" | "company";
  }
  import { useEffect, useState, type StateUpdater} from "react";
  
  
  function Input({
    type,
    text,
    value,
    setValue,
    validError,
    setValidError,
    valid,
    contactPage
  }: Props) {
  
    let input;
    const [error, setError] = useState(false);
  
    const regex = contactPage? {
      name: /^[A-Za-z\s]{3,30}$/,
      email: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-zA-Z0-9]{2,})$/,
      company: /^[A-Za-z\s]{3,30}$/,
      socialMedia: /^[A-Za-z\s]{3,30}$/,
      description: /.*/,
      phone: /^\d{7,16}$/,
    } : {
      name: /^[A-Za-z\s]{3,30}$/,
      email: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-zA-Z0-9]{2,})$/,
      phone: /^\d{7,16}$/,
      socialMedia: /^[A-Za-z\s]{3,30}$/,
      description: /.*/,
      company: /^[A-Za-z\s]{3,30}$/,
    };
  
    
  
    useEffect(() => {
      if (value === "") {
        setError(false);
        return;
      }
      const index = contactPage? [
        "name",
        "email",
        "company",
        "socialMedia",
        "description",
        "phone"
      ].indexOf(valid):  [
        "name",
        "email",
        "phone",
        "socialMedia",
        "description",
        "company"
      ].indexOf(valid);
  
      const isValid = regex[valid].test(value);
  
      setError(!isValid);
      const errors = [...validError];
      errors[index] = isValid;
      setValidError(errors);
    }, [value]);
  
    
  
    function handleOnChange(event: Event) {
      const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    
      if (target) {
        setValue(target.value);
      }
    }
    
    
    
  
    switch (type) {
      case "simple": {
        input = (
          <div className="relative ">
            <input
              id={valid}
              placeholder={text}
              value={value}
              onInput={(event) => {
                handleOnChange(event);
              }}
              className="peer py-3 px-5 focus:outline-none  focus:ring-0 bg-white w-full rounded-lg  min-h-[72px] h-full"
            />
            <p
              className={`text-sm text-red-500 transition-all duration-500 ${
                error ? "max-h-fit opacity-100" : "h-0 opacity-0"
              }`}
            >
              * Not Valid
            </p>
          </div>
        );
        break;
      }
      case "simpleContact": {
        input = (
          <div>
            {" "}
            <input
              placeholder={text}
              value={value}
              onInput={(event) => {
                handleOnChange(event);
              }}
              className="py-4 px-5 focus:outline-none focus:ring-0 h-full bg-backgroundColor w-full rounded-lg border border-[#374151] min-h-[72px] "
            />
            <p
              className={`text-sm text-red-500 transition-all duration-500 ${
                error ? "max-h-fit opacity-100" : "h-0 opacity-0"
              }`}
            >
              * Not Valid
            </p>
          </div>
        );
        break;
      }
      case "select": {
        input = (
          <div className="py-3 px-5 w-full bg-white rounded-lg min-h-[72px] h-full flex justify-center items-center">
            <label for="how you find us"></label>
            <select
            id="how you find us"
              className="w-full focus:outline-none focus:ring-0 h-full"
              aria-label=""
              onInput={(event) => {
                handleOnChange(event);
              }}
            >
              <option hidden>{text}</option>
              <option>Google</option>
              <option>Youtube</option>
              <option>Facebook</option>
              <option>Instagram</option>
            </select>
          </div>
        );
  
        break;
      }
      case "description": {
        input = (
          <div>
            {" "}
            <textarea
              placeholder={`${text}`}
              value={value}
              onInput={(event) => {
                handleOnChange(event);
              }}
              className="py-3 px-5 resize-none focus:outline-none focus:ring-0 w-full rounded-lg   min-h-[145px] h-full"
            />
          </div>
        );
        break;
      }
      case "descriptionContact": {
        input = (
          <div className="w-full h-full">
            {" "}
            <textarea
              placeholder={`${text}`}
              value={value}
              onInput={(event) => {
                handleOnChange(event);
              }}
              className="py-4 px-5 resize-none focus:outline-none focus:ring-0  bg-backgroundColor w-full h-full rounded-lg border border-[#374151] min-h-[145px] "
            />
          </div>
        );
        break;
      }
    }
  
    return <div className="w-full h-full">{input}</div>;
  }
  
  export default Input;