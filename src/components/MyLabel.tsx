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
}

export const MyLabel = ({
  label = "No Label",
  size = "normal",
  allCaps = false,
  color = "text-primary",
  fontColor,
}: Props) => {
  return (
    <span className={`${size} ${color}`} style={{ color: fontColor}}>
      {allCaps ? label.toLocaleUpperCase() : label}
    </span>
  );
};
