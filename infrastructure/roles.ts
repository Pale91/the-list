export enum Roles {
  OWNER = 'owner',
  ADMIN = 'admin',
  USER = 'user'
}

export function isUserAdmin(role?: string) {
  return role !== undefined && (role === Roles.ADMIN || role === Roles.OWNER);
}
