import uiTheme from '../../Themes/default/ui-theme';


import {uniqueId} from 'lodash';

const uId = uniqueId();
export default [
    uId,
    () => [
        {
            query: {},
            style: {
                block: {
                    flex: 1,
                },
                row: {
                    flexDirection: 'row',
                },
                column: {
                    flexDirection: 'column',
                },
                card: {
                    borderRadius: uiTheme.border,
                },
                center: {
                    alignItems: 'center',
                },
                middle: {
                    justifyContent: 'center',
                },
                left: {
                    justifyContent: 'flex-start',
                },
                right: {
                    justifyContent: 'flex-end',
                },
                shadow: {
                    shadowColor: 'black',
                    shadowOffset: {width: 0, height: 4},
                    shadowOpacity: 0.1,
                    shadowRadius: 10,
                },
            },
        },
    ],
];

