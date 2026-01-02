interface TextFielddProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  type?: string;
  name?: string;
  width?: string;
  maxWidth?: string;
  height?: string;
  borderColor?: string;
  backgroundColor?: string;
  borderRadius?: string;
  border?: string;
  fontWeight?: number;
  fontFamily?: string;
  fontSize?: string;
  paddingLeft?: string;
  outline?: string;
  style?: React.CSSProperties;
}

const TextField: React.FC<TextFielddProps> = ({
  value,
  onChange,
  placeholder,
  className,
  type = "text",
  name,
  width,
  maxWidth,
  height = " 35px",
  borderColor = "#182C61",
  backgroundColor = "#DBDEEE",
  border = "none",
  borderRadius = "10px",
  fontWeight,
  fontFamily,
  fontSize,
  paddingLeft = "10px",
  outline = "none",
  style,
}) => {

  return (
      <input
        className={className}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        style={{
          width,
          maxWidth,
          height,
          borderRadius,
          paddingLeft,
          backgroundColor,
          border,
          outline: "none",
        }}
      />
  );
};

export default TextField;
