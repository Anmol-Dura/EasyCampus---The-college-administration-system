// Import necessary models
import { Role } from '../models/Role';

export class RoleController {
  public assignRole(userId: string, role: Role): void {
    // Assign a role to the user
    role.assignRole(userId, role.getRoleID());
    console.log(`Role ${role.getRoleName()} assigned to user ${userId}`);
  }

  public revokeRole(userId: string, role: Role): void {
    // Revoke a role from the user
    role.revokeRole(userId);
    console.log(`Role ${role.getRoleName()} revoked from user ${userId}`);
  }
}