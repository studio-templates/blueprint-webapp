
import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { ItemStatistics } from '../../../components/item-statistics/item-statistics';

export default createBoard({
    name: 'ItemStatistics',
    Board: () => <ItemStatistics icon="shopping-cart" value={0.5} name="Shopping" color="orange" />
});
