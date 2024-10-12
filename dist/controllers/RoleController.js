"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleController = void 0;
class RoleController {
    assignRole(userId, role) {
        // Assign a role to the user
        role.assignRole(userId, role.getRoleID());
        console.log(`Role ${role.getRoleName()} assigned to user ${userId}`);
    }
    revokeRole(userId, role) {
        // Revoke a role from the user
        role.revokeRole(userId);
        console.log(`Role ${role.getRoleName()} revoked from user ${userId}`);
    }
}
exports.RoleController = RoleController;
