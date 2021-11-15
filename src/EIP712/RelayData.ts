import { PrefixedHexString } from 'ethereumjs-tx';

export type IntString = string;

export default interface RelayData {
    gasPrice: string;
    domainSeparator: PrefixedHexString;
    relayWorker: string;
    callForwarder: string;
    callVerifier: string;

    pctRelayFee: IntString;
    baseRelayFee: IntString;
}
