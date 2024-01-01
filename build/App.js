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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const expo_status_bar_1 = require("expo-status-bar");
const expo_1 = require("expo");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const ChangeName_1 = __importDefault(require("./ChangeName"));
const GamesList_1 = __importDefault(require("./GamesList"));
const App = () => {
    const [displayName, setDisplayName] = (0, react_1.useState)('');
    const [gameChosen, setGameChosen] = (0, react_1.useState)([]);
    const [games, setGames] = (0, react_1.useState)([
        { id: 1, name: 'Super Mario Bros.' },
        { id: 2, name: 'The Legend of Zelda: Breath of the Wild' },
        { id: 3, name: 'Mario Kart 8 Deluxe' },
        { id: 4, name: 'Super Smash Bros. Ultimate' },
        { id: 5, name: 'Animal Crossing: New Horizons' },
        { id: 6, name: 'Splatoon 2' },
        { id: 7, name: 'Pokémon Sword and Shield' },
        { id: 8, name: 'Metroid Dread' },
        { id: 9, name: 'Fire Emblem: Three Houses' },
        { id: 10, name: `Luigi's Mansion 3` },
    ]);
    const pressGame = (item) => {
        setGameChosen([...gameChosen, item.name]);
    };
    return (react_1.default.createElement(react_native_1.TouchableWithoutFeedback, { onPress: () => {
            react_native_1.Keyboard.dismiss();
        } },
        react_1.default.createElement(react_native_1.View, { className: " bg-amber-50 items-center justify-center flex-1" },
            react_1.default.createElement(react_native_1.View, { className: "bg-orange-300 px-16 mb-5 rounded py-4 mt-12" },
                react_1.default.createElement(react_native_1.Text, { className: "font-bold" }, "GAMES TO PLAY")),
            react_1.default.createElement(react_native_1.Text, null, displayName),
            react_1.default.createElement(GamesList_1.default, { gameChosen: gameChosen, setGameChosen: setGameChosen }),
            react_1.default.createElement(ChangeName_1.default, { setDisplayName: setDisplayName }),
            react_1.default.createElement(react_native_1.View, null,
                react_1.default.createElement(react_native_1.Text, { className: "font-semibold p-4 mb-2" }, "Example Games:")),
            react_1.default.createElement(react_native_1.FlatList, { className: 'mb-8', numColumns: 1, data: games, renderItem: ({ item }) => (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: () => {
                        pressGame(item);
                    } },
                    react_1.default.createElement(react_native_1.Text, { className: "font-semibold p-4 mb-3 bg-red-100" }, item.name))) }),
            react_1.default.createElement(expo_status_bar_1.StatusBar, { style: "auto" }))));
};
(0, expo_1.registerRootComponent)(App);
