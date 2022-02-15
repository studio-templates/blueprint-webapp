
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { EditableText } from '../../../src/components/editable-text/editable-text';

export default createBoard({
    name: 'EditableText',
    Board: () => <EditableText />
});
