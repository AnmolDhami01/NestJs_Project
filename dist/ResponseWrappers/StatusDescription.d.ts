export default class StatusDescription {
    statusCode: number;
    statusMessage: string;
    getStatusCode(): number;
    getStatusMessage(): string;
    setStatusCode(statusCode: number): void;
    setStatusMessage(statusMessage: string): void;
}
