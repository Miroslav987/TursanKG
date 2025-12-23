import { Dropdown, MenuProps, Radio } from "antd";
import Icon from "../Icon";
import styles from "./styles.module.scss";
import { useState } from "react";

export const LanguageSwitcher = () => {
  const [lang, setLang] = useState("ru");

  const items: MenuProps["items"] = [
    {
      key: "lang",
      label: (
        <>
        {/* <div>Языки</div> */}
        <Radio.Group
          value={lang}
          onChange={(e) => {
            setLang(e.target.value);
            console.log("Выбран язык:", e.target.value);
            // i18n.changeLanguage(e.target.value)
          }}
          className={styles.radioGroup}
        > 
          <Radio value="ru">Русский</Radio>
          <Radio value="kg">Кыргызча</Radio>
        </Radio.Group>
      </>),
    },
  ];

  return (
    <Dropdown
      trigger={["click"]}
      placement="bottom"
      menu={{
        items,
        className: styles.dropdown,
      }}
    >
      <span className={styles.trigger}>
        <Icon name="lang" />
        <Icon sizes={15} name="arrow_down" className={styles.arrow} />
      </span>
    </Dropdown>
  );
};
