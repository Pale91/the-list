export enum Roles {
  OWNER = 'owner',
  ADMIN = 'admin',
  USER = 'user'
}

export function isAdmin(role: string) {
  return role === Roles.ADMIN || role === Roles.OWNER;
}
