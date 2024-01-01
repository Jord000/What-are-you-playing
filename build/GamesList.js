"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = __importDefault(require("react"));
const Feather_1 = __importDefault(require("react-native-vector-icons/Feather"));
const GamesList = ({ gameChosen, setGameChosen }) => {
    //
    const removeListItem = (item) => {
        const indexOfItem = gameChosen.indexOf(item);
        const gamesArray = [...gameChosen];
        gamesArray.splice(indexOfItem, 1);
        setGameChosen(gamesArray);
    };
    removeListItem();
    return (react_1.default.createElement(react_native_1.View, { className: "mb-10 bg-orange-200 w-64" },
        react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_1.Text, { className: "bg-orange-200 items-center font-semibold p-4 mb-2 text-center" }, "What are you currently playing?")),
        react_1.default.createElement(react_native_1.FlatList, { className: "grow-0 max-h-24", numColumns: 1, data: gameChosen, renderItem: ({ item }) => (react_1.default.createElement(react_native_1.TouchableWithoutFeedback, { onPress: () => { } },
                react_1.default.createElement(react_native_1.View, { className: "flex w-auto bg-orange-200 p-2 border-solid border-2 border-orange-900 mb-2 mx-4" },
                    react_1.default.createElement(react_native_1.Text, { className: "pr-2" }, item),
                    react_1.default.createElement(Feather_1.default, { name: "minus-circle", size: 20, style: { marginLeft: 'auto' }, onPress: () => {
                            removeListItem(item);
                        } })))) })));
};
exports.default = GamesList;
