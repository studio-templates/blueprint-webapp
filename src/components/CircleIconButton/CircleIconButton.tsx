import { IconName } from '@blueprintjs/icons';
import React from 'react';
import { Icon } from '../icon/Icon';

import './CircleIconButton.scss';


export interface CircleIconButtonProps {
    icon: IconName | JSX.Element;
    size?: 'large' | 'small';
}

export const CircleIconButton: React.FC<CircleIconButtonProps> = ({ icon, size }) => {
    
    return (
        <div className={`circle-btn ${size || 'large'}`}>
            <Icon size={size && size == 'small' ? 12 : 16} icon={icon}/>
        </div>
    )
};