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
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor, }: Props) => import("react/jsx-runtime").JSX.Element;
