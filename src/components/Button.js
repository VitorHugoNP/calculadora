import react from "react";
import {Dimensions, Stylesheet, Text, TouchableHighlight } from "react-native";

const styles=Stylesheet.create({
    button:{
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding:20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderwidth: 1,
        bordercolor: '#888888'
    },
    operationButton:{
        color: '#ffffff',
        backgroundColor: '#fa8231',
    },
    buttondouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttontriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
})

export default props => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttondouble)
    if (props.triple) stylesButton.push(styles.buttontriple)
    if (props.operation) stylesButton.push(styles.operationButton)

    return (
        <TouchableHighlight onPress={props.onClick}>
            <text style={stylesButton}>{props.label}</text>
        </TouchableHighlight>
    )
}