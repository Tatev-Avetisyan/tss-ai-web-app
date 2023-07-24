import Title from "@/shared/Title/Title";
import Text from "@/shared/Text/Text";
import styles from "./emptyState.module.scss";
import ButtonWithIcon from "@/shared/Button/ButtonWithIcon";

const EmptyState = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.separator} />
      <div className={styles.emptyPageWrapper}>
        <div className={styles.emptyPageInnerWrapper}>
          <div className={styles.headerWrapper}>
            <Title context="You have no requests" />
            <Text context="After submitting requests, you’ll find them here" />
          </div>
          <ButtonWithIcon />
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
