import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { BaseColors, classNames, colorTheme, defaultColors, getColorVariantsFromColorThemeValue, sizing } from 'lib';
import { Color, MarginTop } from '../../../lib';

export interface MarkerBarProps {
    percentageValue: number,
    color?: Color,
    tooltip?: string,
    marginTop?: MarginTop,
}

const MarkerBar = ({
    percentageValue,
    color = BaseColors.Blue,
    tooltip,
    marginTop = 'mt-0',
}: MarkerBarProps) => {
    const primaryBgColor = getColorVariantsFromColorThemeValue(colorTheme[color].background).bgColor;
    const secondaryBgColor = getColorVariantsFromColorThemeValue(colorTheme[color].lightBackground).bgColor;
    return(
        <div className={ classNames(
            'relative flex items-center w-full rounded-lg',
            marginTop,
            secondaryBgColor,
            sizing.xs.height,
        ) }>
            <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
                <div
                    className={ classNames(
                        'absolute right-1/2 -translate-x-1/2',
                        sizing.lg.width, // wide transparant wrapper for tooltip activation
                    ) }
                    style={ { 'left': `${percentageValue}%` } }
                >
                    <div
                        className={ classNames(
                            'rounded-lg ring-2 mx-auto',
                            primaryBgColor,
                            getColorVariantsFromColorThemeValue(defaultColors.white).ringRolor,
                            sizing.md.height,
                            sizing.twoXs.width,
                        ) }
                    />
                </div>
            </Tooltip>
        </div>
    );
};

export default MarkerBar;
