import Link from "next/link";
import styles from "./styles.module.scss";
import { navItems } from "../model/data";
import Icon from "@shared/ui/Icon";

const NavItems = () => {
  return (
    <div id="contact_us" className={`${styles.navItems} `}>
      {navItems.map((group, index) => (
        <div key={index} className={styles.navColumn}>
          <h2 className={styles.title}>{group.title}</h2>
          <ul className={styles.list}>
            {group.info.map((item, itemIndex) => (
              <li key={itemIndex} className={styles.item}>
                {item.icon && <Icon sizes="small" name={item.icon} />}
                {item.path ? (
                  <Link href={item.path}>{item.text}</Link>
                ) : (
                  <span>{item.text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NavItems;
