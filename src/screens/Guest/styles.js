import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    },
    adultText: {
        fontWeight: 'bold',
    },
    ageText: {
        color: '#8d8d8d'
    },
    button: {
       borderWidth: 1,
       height: 30,
       width: 30,
       borderRadius: 15,
       borderColor: '#676767',
       justifyContent: 'center',
       alignItems: 'center',
    },
    values: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    number: {
        marginHorizontal: 20,
        fontSize: 16,
    },
    signs: {
        fontSize: 20,
        color: "#474747",
    }
});

export default styles;
