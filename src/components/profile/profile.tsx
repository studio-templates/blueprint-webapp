import React from 'react';

export interface ProfileProps {
    className?: string;
}

export const Profile: React.FC<ProfileProps> = ({ className = '',children }) => (
    <div className={className}>{children}</div>
);