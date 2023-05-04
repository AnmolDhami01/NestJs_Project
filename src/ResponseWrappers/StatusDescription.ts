export default class StatusDescription {
  statusCode: number;
  statusMessage: string;

  getStatusCode(): number {
    return this.statusCode;
  }
  getStatusMessage(): string {
    return this.statusMessage;
  }
  setStatusCode(statusCode: number) {
    this.statusCode = statusCode;
  }
  setStatusMessage(statusMessage: string) {
    this.statusMessage = statusMessage;
  }
}
