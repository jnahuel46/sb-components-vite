import { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ label, size, allCaps, color, fontColor, backgroundColor, }: import("../../components/MyLabel").Props) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    parameters: {
        layout: string;
    };
    argTypes: {
        size: {
            control: string;
        };
        fontColor: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const AllCaps: Story;
export declare const Secondary: Story;
export declare const CustomColor: Story;
export declare const CustomBackgroundColor: Story;
