
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { FormGroup } from '../../../src/components/form-group/form-group';

export default createBoard({
    name: 'FormGroup',
    Board: () => <FormGroup />
});
