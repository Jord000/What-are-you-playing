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
const expo_status_bar_1 = require("expo-status-bar");
const expo_1 = require("expo");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const App = () => {
    const [name, setName] = (0, react_1.useState)('Jordan');
    const [gameChosen, setGameChosen] = (0, react_1.useState)('Mario');
    const [players, setPlayers] = (0, react_1.useState)([{ id: 1, name: 'Jordan' }, { id: 2, name: 'Jess' }]);
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: styles.header },
            react_1.default.createElement(react_native_1.Text, { style: styles.boldTitle }, "GAMES")),
        react_1.default.createElement(react_native_1.View, { style: styles.body },
            react_1.default.createElement(react_native_1.Text, null,
                "Hello ",
                name),
            react_1.default.createElement(react_native_1.Text, null, "What would you like to play today?"),
            react_1.default.createElement(react_native_1.Text, null,
                "You would like to play - ",
                gameChosen),
            react_1.default.createElement(react_native_1.Text, null)),
        react_1.default.createElement(react_native_1.Text, null, "Change name:"),
        react_1.default.createElement(react_native_1.TextInput, { style: styles.input, placeholder: "My name is", onChangeText: (val) => {
                setName(val);
            } }),
        react_1.default.createElement(react_native_1.Text, null, "I'd like to play:"),
        react_1.default.createElement(react_native_1.TextInput, { style: styles.input, placeholder: "Super Mario", onChangeText: (val) => {
                setGameChosen(val);
            }, multiline: true }),
        react_1.default.createElement(react_native_1.View, { style: styles.buttonContainer },
            react_1.default.createElement(react_native_1.Button, { title: "submit" })),
        react_1.default.createElement(expo_status_bar_1.StatusBar, { style: "auto" })));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: '#f5d57f',
        padding: 50,
    },
    boldTitle: {
        fontWeight: '400',
    },
    body: {
        backgroundColor: '#faebc8',
        padding: 20,
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 20,
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: 'grey',
        minWidth: 100,
        padding: 5,
        paddingLeft: 25,
        paddingRight: 25,
    },
});
(0, expo_1.registerRootComponent)(App);
