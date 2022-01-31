
import React from 'react';
import { createDemo } from '@wixc3/react-simulation';
import { ButtonGroup } from '../../../src/components/button-group/button-group';
import { Button } from '../../../src/components/Button/Button';

export default createDemo({
    name: 'ButtonGroup - vertical',
    demo: () => <ButtonGroup vertical={true}><Button icon="emoji" /><Button icon="emoji" /><Button icon="emoji" /><Button icon="emoji" /></ButtonGroup>
});
