/**
 * @author ANHVTN11
 *
 */
import {Image, Platform, StatusBar, Dimensions} from 'react-native';
import {floor, startsWith, values} from 'lodash';


/**
 * Mili-seconds sleep
 * @param {number} miliSeconds
 * @returns {Promise}
 */
export function msSleep(miliSeconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, miliSeconds);
    });
}

/**
 * Sleep
 * @param {number} seconds
 */
export function sleep(seconds) {
    return msSleep(seconds * 1000);
}

/**
 * Generate random string
 * @param {number} length
 * @param {string} chars
 * @returns {string}
 */
export function randomString(length, chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz') {
    let str = '';
    const charsLen = chars.length;

    for (let i = 0; i < length; i++) {
        str += chars.charAt(floor(Math.random() * charsLen));
    }
    return str;
}

/**
 * Strip whitespace (or other characters) from the end of a string
 * @param {string} str
 * @param {string} charlist
 * @return {string}
 */
export function rtrim(str, charlist) {
    const whitespaces = ' \\s\u00A0';
    charlist = !charlist ? whitespaces : (whitespaces + (charlist + '')
        .replace(/([\\[\]().?/*{}+$^:])/g, '\\$1'));

    const re = new RegExp('[' + charlist + ']+$', 'g');

    return (str + '').replace(re, '');
}

/**
 * Get extension
 * @param {string} path
 * @param {bool} includeDot
 * @return {string}
 */
export function getExtension(path, includeDot = false) {
    const lastIndexOfDot = path.lastIndexOf('.');
    if (lastIndexOfDot === -1) {
        return '';
    }

    const extension = path.substring(lastIndexOfDot + 1);

    return ((includeDot && extension ? '.' : '') + extension);
}

/**
 * Convert object to Uint8Array
 * @param {Object} object
 * @return {Uint8Array}
 */
export function objectToUint8Array(object) {
    return new Uint8Array(values(object));
}

/**
 * Prepend file protocol if needed
 * @param {string|null|undefined} uri
 * @return {string|null|undefined}
 */
export function prependFileProtocol(uri) {
    if (uri && !startsWith(uri, 'file://')) {
        uri = 'file://' + uri;
    }
    return uri;
}

/**
 * return {width, height} image size
 * @param {string} uri
 * @return {Promise}
 */
export async function getImageSize(uri) {
    return new Promise((resolve, reject) => {
        Image.getSize(uri, (width, height) => {
            resolve({width, height});
        }, () => {
            reject();
        });
    });
}

/**
 * @param {boolean} seconds
 * @returns {number}
 */
export function tNow(seconds = true) {
    const t = new Date().getTime();
    return seconds ? Math.floor(t / 1000) : t;
}

/**
 *
 * @param secs
 * @returns {string}
 */

export function toHHMMSS(secs) {
    let sec_num = parseInt(secs, 10);
    let hours = Math.floor(sec_num / 3600) % 24;
    let minutes = Math.floor(sec_num / 60) % 60;
    let seconds = sec_num % 60;
    return [hours, minutes, seconds]
        .map(v => v < 10 ? '0' + v : v)
        .filter((v, i) => v !== '00' || i > 0)
        .join(':');
}

/**
 *
 * @param number
 * @param digits
 * @returns {string|number|*}
 */

export function metricSuffix(number, digits = 1) {
    if (number < 0) {
        return 0;
    }
    if (number < 1e3) {
        return number;
    }

    const exp = Math.floor(Math.log(number) / Math.log(1e3));
    number /= Math.pow(1e3, exp);

    const exp2 = Math.ceil(Math.log(number) / Math.log(1e1));
    if (digits < exp2) {
        digits = exp2;
    }

    return +number.toPrecision(digits) + 'kMBT'.charAt(exp - 1);
}

/**
 *
 * @param obj
 */
export function objectNullOrEmpty(obj) {

}

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const {height: W_HEIGHT, width: W_WIDTH} = Dimensions.get('window');

let isIPhoneX_v = false;
let isIPhoneXMax_v = false;
let isIPhoneWithMonobrow_v = false;

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
    if (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) {
        isIPhoneWithMonobrow_v = true;
        isIPhoneX_v = true;
    }

    if (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT) {
        isIPhoneWithMonobrow_v = true;
        isIPhoneXMax_v = true;
    }
}

export const isIPhoneX = () => isIPhoneX_v;
export const isIPhoneXMax = () => isIPhoneXMax_v;
export const isIPhoneWithMonobrow = () => isIPhoneWithMonobrow_v;

export function getStatusBarHeight(skipAndroid) {
    return Platform.select({
        ios: isIPhoneWithMonobrow_v ? 44 : 20,
        android: skipAndroid ? 0 : StatusBar.currentHeight,
        default: 0,
    });
}

export const removeWhiteSpace2 = (value) => {
    return value.replace('  ', ' ');
};

export const removeWhiteSpacePassword = (value) => {
    return value.replace(' ', '');
};
export const isEmail = (value) => {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}
