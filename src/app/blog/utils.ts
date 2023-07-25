// utils.ts

export function chunk<T>(array: T[], size: number): T[][] {
    return Array.from({ length: Math.ceil(array.length / size) }, (v, index) =>
      array.slice(index * size, index * size + size)
    );
  }
  