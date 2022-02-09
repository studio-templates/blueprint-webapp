import { IconName } from '@blueprintjs/icons';
import React from 'react';
import { Icon } from '../icon/Icon';

import './CircleIconButton.scss';


export interface CircleIconButtonProps {
    icon: IconName | JSX.Element;
}

export const CircleIconButton: React.FC<CircleIconButtonProps> = ({ icon }) => {
    return (
        <div className="circle-btn">
            <Icon icon={icon}/>
        </div>
    )
};