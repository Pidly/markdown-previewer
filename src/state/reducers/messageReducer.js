const defaultValue = "# header markdown\n" + 
                    "Here's some JS code\n" +
                    "```js\n" + 
                    "var goldCoins = 1000000;\n" + 
                    "```\n" +
                    "## header 2\n" + 
                    "* list item\n" + 
                    "    * sub list item\n" + 
                    "    * sub list item2\n" +
                    "* list item2";
const reducer = (state = defaultValue, action) => {
    switch(action.type) {
        case 'MESSAGE':
            return action.message;
        default:
            return state;
    }
};

export default reducer;