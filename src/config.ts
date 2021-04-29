function getEnv(key: string) {
  return process.env[key];
}

export function getAuthTokenPrivateKey(): string {
  return getEnv('AUTH_TOKEN_PRIVATE_KEY') || 'password';
}

export function getPort(): number {
  return Number(getEnv('PORT')) || 3001;
}
