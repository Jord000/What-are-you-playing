"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const ChangeName = ({ setDisplayName }) => {
    const [name, setName] = (0, react_1.useState)('');
    const textInputRef = (0, react_1.useRef)(null);
    const pressSubmit = () => {
        if (name.length > 0) {
            setDisplayName(`Hello ${name}`);
            setName('');
        }
        else {
            react_native_1.Alert.alert('OOPs', 'Name must be longer than 0 chars', [
                {
                    text: 'ok',
                },
            ]);
        }
        if (textInputRef.current) {
            textInputRef.current.clear();
        }
    };
    return (react_1.default.createElement(react_native_1.View, null,
        react_1.default.createElement(react_native_1.Text, { className: "text-center font-medium" }, "Change name:"),
        react_1.default.createElement(react_native_1.View, { className: "flex-row items-center" },
            react_1.default.createElement(react_native_1.TextInput, { className: "border border-gray-400 rounded-sm p-1 px-8 mr-6", placeholder: "My name is", onChangeText: (val) => {
                    setName(val);
                }, ref: textInputRef }),
            react_1.default.createElement(react_native_1.View, { className: "my-4" },
                react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: () => {
                        pressSubmit();
                    } },
                    react_1.default.createElement(react_native_1.Text, { className: 'bg-orange-400 p-2 px-4 rounded-md' }, "submit"))))));
};
exports.default = ChangeName;
