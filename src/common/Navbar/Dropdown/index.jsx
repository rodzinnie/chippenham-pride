import styles from "./index.module.css";
import clsx from "clsx";
import MenuItems from "../MenuItems";
const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? styles.dropdownSubmenu : "";
  return (
    <ul
      className={clsx(
        styles.dropdown,
        `${dropdownClass} ${dropdown ? styles.show : ""}`
      )}
    >
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default Dropdown;
