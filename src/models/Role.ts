export class Role {
    private roleId: string;
    private roleName: string;
    private permissions: string[];
  
    constructor(roleId: string, roleName: string) {
      this.roleId = roleId;
      this.roleName = roleName;
      this.permissions = [];
    }
    public getRoleID(): string{
        return this.roleId;
    }
    public getRoleName(): string{
        return this.roleName;
    }
    public assignRole(userId: string, roleId: string): void {
      console.log(`Role ${this.roleName} assigned to user ${userId}`);
    }
  
    public revokeRole(userId: string): void {
      console.log(`Role ${this.roleName} revoked from user ${userId}`);
    }
  }