interface Props {
    color: "black" | "white" | "brandColor" | string;
  }
  
   function NextArrow({ color }: Props) {
    switch(color){
      case 'black': {color = "black"; break;}
      case 'white': {color = "white"; break;}
      case 'brandColor': {color = "#4a8cee"; break;}
    }
    return (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="22"
          viewBox="0 0 21 22"
          fill="none"
        >
          <path
            d="M11.1812 3.03076L18.925 10.7745L11.1812 18.5183M18.2022 10.7745H0.339981"
            stroke={`${color}`}
            stroke-width="1.29101"
          />
        </svg>
      </div>
    );
  }
  
  export default NextArrow;