"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
class Role {
    constructor(roleId, roleName) {
        this.roleId = roleId;
        this.roleName = roleName;
        this.permissions = [];
    }
    getRoleID() {
        return this.roleId;
    }
    getRoleName() {
        return this.roleName;
    }
    assignRole(userId, roleId) {
        console.log(`Role ${this.roleName} assigned to user ${userId}`);
    }
    revokeRole(userId) {
        console.log(`Role ${this.roleName} revoked from user ${userId}`);
    }
}
exports.Role = Role;
