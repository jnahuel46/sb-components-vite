import "./my-label.css";

export interface Props {
  /**
   * Message to be showed
   */
  label: string;
  /**
   * Size of the title
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * All caps strings
   */
  allCaps?: boolean;
  /**
   * Colors of strings
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**
   *Font Colors of strings
   */
  fontColor?: string;
  /**
   *Background Colors of strings
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  label = "No Label",
  size = "normal",
  allCaps = false,
  color = "text-primary",
  fontColor,
  backgroundColor = "transparent",
}: Props) => {
  return (
    <span
      className={`${size} ${color}`}
      style={{ color: fontColor, backgroundColor: backgroundColor }}
    >
      {allCaps ? label.toLocaleUpperCase() : label}
    </span>
  );
};
