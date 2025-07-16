import { Dimensions, StyleSheet, Platform } from 'react-native'
import { alignment, colors, scale, verticalScale } from '../../utils'
const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
    containerSplash: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: Platform.OS === 'web' ? 0 : scale(50),
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerImage: {
        width: "70%",
        resizeMode: 'contain',
    },
    topHeader: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerPreview: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: scale(50),
        paddingHorizontal: scale(20),
    },
    topRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(),
    },
    pageCount: {
        fontSize: scale(16),
        fontWeight: '600',
        fontFamily: 'Montserrat-Regular',
        color: colors.grayDark,
    },
    skipText: {
        fontSize: scale(16),
        fontWeight: '600',
        fontFamily: 'Montserrat-Regular',
        color: colors.redLight,
    },
    image: {
        width: '100%',
        height: 300
    },
    title: {
        fontSize: scale(24),
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Bold',
        color: colors.black,
        textAlign: 'center',
        marginTop: scale(20),
    },
    description: {
        fontSize: scale(14),
        color: colors.grayLight,
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center',
        marginTop: scale(10),
        paddingHorizontal: scale(10),
    },
    pagination: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: scale(10),
    },
    dot: {
        width: scale(8),
        height: scale(8),
        borderRadius: scale(4),
        backgroundColor: colors.grayLight200,
        marginHorizontal: scale(5),
        marginBottom: scale(5)
    },
    activeDot: {
        backgroundColor: colors.blueDark,
        width: scale(12),
        height: scale(12),
        borderRadius: scale(6),
    },
    bottomRow: {
        width: '100%',
        height: scale(50),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scale(20),
        alignItems: 'center',
        alignContent: 'flex-end'

    },
    nextText: {
        fontSize: scale(18),
        fontWeight: '700',
        fontFamily: 'Montserrat-Medium',
        color: colors.redLight,
        marginBottom: 0,
    },
    prevText: {
        fontSize: scale(18),
        fontWeight: '700',
        fontFamily: 'Montserrat-Medium',
        color: colors.darkGrayText,
        marginBottom: 0,
    },
    bodyStyle: {
        width: '100%',
        flexDirection: 'column',
        //justifyContent: 'space-between',
        //marginTop: 20,
    },
})
export default styles
