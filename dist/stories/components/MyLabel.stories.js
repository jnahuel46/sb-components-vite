"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackgroundColor = exports.CustomColor = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var MyLabel_1 = require("../../components/MyLabel");
var meta = {
    title: "UI/MyLabel",
    component: MyLabel_1.MyLabel,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        size: { control: "select" },
        fontColor: { control: "color" },
    },
};
exports.default = meta;
exports.Basic = {
    args: {
        label: 'Basic Label',
        size: "normal"
    }
};
exports.AllCaps = {
    args: {
        label: 'Basic Label',
        size: "h1",
        allCaps: true
    }
};
exports.Secondary = {
    args: {
        label: 'Basic Label',
        size: "normal",
        color: 'text-tertiary'
    }
};
exports.CustomColor = {
    args: {
        label: 'Custom Color Label',
        size: "h2",
        fontColor: '#55166'
    }
};
exports.CustomBackgroundColor = {
    args: {
        label: 'Custom Color Label',
        size: "h2",
        fontColor: 'white',
        backgroundColor: "blue"
    }
};
