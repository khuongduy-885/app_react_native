// @flow
import {memoize} from 'lodash';
import Device from './Device';
import ResponsiveStyleSheet from './ResponsiveStyleSheet';

function styleSelect(style) {
    return ResponsiveStyleSheet.select(style[1]());
}

const MemoizeResponsiveStyleSheet = memoize(styleSelect, function (style) {
    const {width, height} = Dimensions.get("window");
    return style[0] + ':' + width + ':' + height + ':' + 'defaultTheme';
});

export default MemoizeResponsiveStyleSheet;
