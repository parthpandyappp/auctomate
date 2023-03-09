import { atom, useSetRecoilState } from 'recoil';

export const bids = atom({
    key: 'bidState',
    default: [],
});

