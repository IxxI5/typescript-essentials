// src/utils/Logger.ts

export function logInfo(message: string): void {
  console.log(`INFO: ${message}`);
}

export function logError(message: string): void {
  console.error(`ERROR: ${message}`);
}

// Avoid using namespaces for types or interfaces that we want to export directly since it will lead to error.
