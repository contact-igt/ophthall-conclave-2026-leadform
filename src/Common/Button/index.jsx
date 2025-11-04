import { DynamicIcon } from "lucide-react/dynamic";
import styles from "./styles.module.css";
import { saveAs } from "file-saver";

const Button = ({
  title,
  bgcolor,
  colors,
  link,
  icon,
  target,
  border,
  iconname,
  type,
  variant,
  disabled,
  handleTogglecontactForm,
  url,
}) => {
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    if (handleTogglecontactForm) handleTogglecontactForm();

    if (url) {
      const saveFile = () => {
        saveAs(url, "Ophthall 2026 Conclave Conference Program Agenda.pdf");
      };
      saveFile();
    }
  };

  return (
    <div className={styles.commonbutton}>
      {link && iconname && variant === "secondary" ? (
        <a href={!disabled ? link : undefined} target={target}>
          <button
            disabled={disabled}
            type="btn"
            className={` btn ${styles.button}`}
            style={{ backgroundColor: bgcolor, color: colors, border: border }}
          >
            {title} <DynamicIcon name={iconname} color={colors} size={19} />
          </button>
        </a>
      ) : link && iconname ? (
        <a href={!disabled ? link : undefined} target={target}>
          <button
            disabled={disabled}
            type="btn"
            className={` btn ${styles.button}`}
            style={{ backgroundColor: bgcolor, color: colors, border: border }}
          >
            <DynamicIcon name={iconname} color={colors} size={19} /> {title}
          </button>
        </a>
      ) : link && !iconname ? (
        <a href={!disabled ? link : undefined} target={target}>
          <button
            disabled={disabled}
            type="btn"
            className={` btn ${styles.button}`}
            style={{ backgroundColor: bgcolor, color: colors, border: border }}
          >
            <img src={icon} alt="" />
            {title}
          </button>
        </a>
      ) : !link && iconname && url ? (
        <>
          <button
            disabled={disabled}
            type={type ? type : "button"}
            onClick={handleClick}
            className={` btn ${styles.button}`}
            style={{ backgroundColor: bgcolor, color: colors, border: border }}
          >
            {title} <DynamicIcon name={iconname} color={colors} size={18} />
          </button>
        </>
      ) : !link && iconname ? (
        <>
          <button
            disabled={disabled}
            type={type ? type : "button"}
            onClick={handleClick}
            className={` btn ${styles.button}`}
            style={{ backgroundColor: bgcolor, color: colors, border: border }}
          >
            {title} <DynamicIcon name={iconname} color={colors} size={18} />
          </button>
        </>
      ) : (
        <>
          <button
            disabled={disabled}
            type={type ? type : "button"}
            onClick={handleClick}
            className={` btn ${styles.button}`}
            style={{ backgroundColor: bgcolor, color: colors, border: border }}
          >
            <img src={icon} alt="" />
            {title}
          </button>
        </>
      )}
    </div>
  );
};

export default Button;
