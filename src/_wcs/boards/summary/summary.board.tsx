import { createBoard } from '@wixc3/react-board';
import { Summary } from '../../../components/summary/summary';

export default createBoard({
    name: 'Summary',
    Board: () => <Summary />,
    environmentProps: {
        canvasWidth: 266
    }
});
