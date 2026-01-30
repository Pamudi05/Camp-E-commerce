interface ButtonProps {
  className?: string;
  onButtonClick?: () => void;
  type?: "button" | "submit" | "reset";
  name?: string;
  style?: React.CSSProperties;
  color?: string;
  backgroundColor?:string;
  height?:string;
  borderRadius?:string;
  border?:string;
  fontWeight?:string;
  outline?:string;
  marginTop?:string;
  disable?:boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  onButtonClick,
  type = "button",
  name,
  color = "white",
  backgroundColor = "#182C61",
  height = "35px",
  borderRadius = "10px",
  border = "none",
  fontWeight = "600",
  outline = "none",
  marginTop = "40px",
  disable = false,
  style,
}) => {
  return (
      <button
        className={className}
        type={type}
        onClick={onButtonClick}
        disabled={disable}
        style={{
          color,
          backgroundColor,
          height,
          borderRadius,
          border,
          cursor : "pointer",
          fontWeight,
          outline,
          marginTop,
        }}
      >
        {name}
      </button>
  );
};

export default Button;
