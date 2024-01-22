export namespace HelperClassname {
  export function build(names: Record<string, boolean>): string {
    return Object.entries(names)
      .filter(([name, isActive]) => isActive)
      .map(([name]) => name)
      .join(' ')
  }
}
