export default (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  } else if (typeof error === 'object' && error !== null && 'statusMessage' in error) {
    return (error as { statusMessage: string }).statusMessage;
  } else {
    return 'An unknown error occurred';
  }
}
