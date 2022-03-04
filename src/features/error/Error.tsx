import { FallbackProps } from 'react-error-boundary';

export const Error = ({ error }: FallbackProps) => <pre>{error.message}</pre>;
