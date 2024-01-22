export namespace Helper {
  export function buildClasses(classes: Record<string, boolean>): string {
    return Object.entries(classes)
      .filter(([_, isVisible]) => isVisible)
      .map(([key]) => key)
      .join(' ')
  }
}
