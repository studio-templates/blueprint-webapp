import React from 'react';
import { Text } from '../text/text';
import { Icon } from '../icon/Icon';

export interface MemberIndicatorProps {
    className?: string;
}

export const MemberIndicator: React.FC<MemberIndicatorProps> = ({ className = '' }) => (
    <div className={className}>
        <div>
            <Icon icon="envelope" />
        </div>
        <div>
            <Icon icon="notifications"/>
        </div>
        <div>
            <Icon icon="user"/>
        </div>
        <Text />
        <Text />
    </div>
);