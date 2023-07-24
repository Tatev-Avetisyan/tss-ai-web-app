import styles from "./button.module.scss";
import PlusIcon from "../../assets/plus.svg";
import Image from "next/image";

interface ButtonType {
  extraStyle?: any;
  onClick?: any;
  type?: "button" | "submit";
}

const ButtonWithIcon: React.FC<ButtonType> = ({
  extraStyle,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.btn} ${extraStyle}`}
    >
      <div className={styles.contentWrapper}>
        <Image src={PlusIcon} alt="plus" />
        <p>New request</p>
      </div>
    </button>
  );
};

export default ButtonWithIcon;
