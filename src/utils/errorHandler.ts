export class CustomError extends Error {
constructor(message:string) {
super(message);
this.name = 'CustomError';
}
}

export function handleError(error: Error) { console.error(`Handled Error: ${error.name} - ${error.message}`);}

