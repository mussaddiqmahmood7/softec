interface Props {
  color: "black" | "white" | "brandColor" | string;
}
 function PrevArrow({ color }: Props) {
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
          d="M10.0388 3.03076L2.29502 10.7745L10.0388 18.5183M3.01777 10.7745H20.88"
          stroke={`${color}`}
          stroke-width="1.29101"
        />
      </svg>
    </div>
  );
}

export default PrevArrow;