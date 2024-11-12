const { Role } = require('../src/models/Role'); 

describe('Role', () => {
  let role;

  beforeEach(() => {
    role = new Role('R123', 'Admin');
    jest.clearAllMocks();
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  test('should initialize with correct properties', () => {
    expect(role.getRoleID()).toBe('R123');
    expect(role.getRoleName()).toBe('Admin');
    expect(role.permissions).toEqual([]);
  });

  test('should assign role and log output', () => {
    const userId = 'U001';
    const roleId = 'R123';
    role.assignRole(userId, roleId);

    expect(console.log).toHaveBeenCalledWith('Role Admin assigned to user U001');
  });

  test('should revoke role and log output', () => {
    const userId = 'U001';
    role.revokeRole(userId);

    expect(console.log).toHaveBeenCalledWith('Role Admin revoked from user U001');
  });
});
