
/**
 * @author ANHVTN11
 * 01/11/2019
 * */

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function goBack() {
    _navigator?.goBack();
}

function navigate(routeName, params) {
    _navigator?.navigate(routeName, params);
}

function getCurrentRoute() {
    return _navigator?.getCurrentRoute();
}

// add other navigation functions that you need and export them
export default {
    navigate,
    setTopLevelNavigator,
    getCurrentRoute,
    goBack
};
