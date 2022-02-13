import React from 'react';
import { IconName } from '@blueprintjs/icons';
import { Icon } from '../icon/Icon';
import styles from './circle-icon-button.module.scss';


export interface CircleIconButtonProps {
    className?: string;
    icon: IconName | JSX.Element;
}

export const CircleIconButton: React.FC<CircleIconButtonProps> = ({    
   icon,
    ...props
}) => {
    return (
        <div className={styles['circle-btn']}>
            <Icon icon={icon}/>
        </div>
    )
};

