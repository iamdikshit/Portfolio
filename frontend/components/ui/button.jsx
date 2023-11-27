"use client";
const Button = (props) => {
  if (props.type === "special")
    return (
      <button
        onClick={props.onClick}
        className={`group relative overflow-hidden flex items-center justify-center border-2 bg-transparent  font-bold ${props.classess}`}
      >
        <div
          className={`absolute translate-y-48   h-72 w-72 rounded-full transition-all duration-[500ms] ease-out group-hover:-translate-y-0 ${props.divClass}  `}
        ></div>
        <span className={`relative group-hover:text-white`}>{props.text}</span>
      </button>
    );
  else
    return (
      <button
        onClick={props.onClick}
        className={`${props.classess} flex items-center justify-center gap-1`}
      >
        <span className="block ">{props.text}</span>
        <span className="block">{props.icon}</span>
      </button>
    );
};

export default Button;
