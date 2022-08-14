import { createBoard } from '@wixc3/react-board';
import { Status } from '../../../components/status/status';

export default createBoard({
    name: 'Status',
    Board: () => <Status />,
    environmentProps: {
        canvasWidth: 340
    }
});
