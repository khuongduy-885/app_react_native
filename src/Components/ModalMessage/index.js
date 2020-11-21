import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    TouchableOpacity,
    View,
    Text,
} from 'react-native';

import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import styleSheet from './index.style';
import {MemoizeResponsiveStyleSheet} from '../../Module/Responsive';
import {hideMessage} from '../../Redux/Actions';
import {
    APP_MODAL_ID_MAIN,
    MESSAGAE_INFO,
    MESSAGAE_ERROR,
    MESSAGAE_PRIMARY,
    MESSAGAE_WARNING,
} from '../../Common/Constants';
import t from '../../Common/Languages';

import Box from '../Box';

class Index extends Component {

    getStyles = () => {
        return MemoizeResponsiveStyleSheet(styleSheet);
    };

    getTypeStyle = (type) => {
        const styles = this.getStyles();
        switch (type) {
            case MESSAGAE_INFO:
                return styles.info;
            case MESSAGAE_ERROR:
                return styles.error;
            case MESSAGAE_PRIMARY:
                return styles.primary;
            case MESSAGAE_WARNING:
                return styles.warning;
            default:
                return styles.info;
        }
    };

    render() {
        const {options} = this.props;
        const styles = this.getStyles();
        const {hideMessage} = this.props;


        if (!options) {
            return null;
        }
        return (
            <Modal style={styles.container}
                   backdropColor={'rgba(0,0,0,0.59)'}
                   animationIn={'zoomIn'}
                   animationOut={'zoomOut'}
                   supportedOrientations={['portrait', 'landscape']}
                   isVisible={options.visible}>
                <View style={styles.containerView}>
                    <View style={[styles.header, this.getTypeStyle(options.type)]}>
                        <Text style={[styles.title]}>{options.title}</Text>
                    </View>
                    <Box center middle style={[this.getTypeStyle(options.type), styles.messageView]}>
                        <Text style={styles.messages}> {options.message} </Text>
                    </Box>
                    <Box row center style={styles.buttonView}>
                        {
                            options.hasConfirm &&
                            <TouchableOpacity
                                style={styles.button}
                                activeOpacity={0.7}
                                onPress={() => {
                                    options._confirm();
                                    hideMessage(APP_MODAL_ID_MAIN);
                                }}
                            >
                                <Text style={styles.buttonText}> {t('button.confirm')} </Text>
                            </TouchableOpacity>
                        }
                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.7}
                            onPress={() => hideMessage(APP_MODAL_ID_MAIN)}
                        >
                            <Text style={styles.buttonText}> {t('button.close')} </Text>
                        </TouchableOpacity>
                    </Box>
                </View>
            </Modal>
        );
    }
}

Index.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    message: PropTypes.string,
    hasConfirm: PropTypes.bool,
};


const mapStateToProps = (state, props) => {
    return {
        options: state.modalMessage[props.id],
    };
};
const mapDispatchToProps = dispatch => {
    return {
        hideMessage: (id) => {
            dispatch(hideMessage(id));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Index);
