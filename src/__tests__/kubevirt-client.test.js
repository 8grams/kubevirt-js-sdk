import { KubeVirtClient } from '../index.js';

describe('KubeVirtClient', () => {
  let client;

  beforeEach(() => {
    client = new KubeVirtClient({
      baseURL: 'http://localhost:8080',
      headers: {
        'Authorization': 'Bearer test-token'
      }
    });
  });

  test('should initialize all API clients', () => {
    expect(client.kubevirt).toBeDefined();
    expect(client.virtualMachine).toBeDefined();
    expect(client.virtualMachineInstance).toBeDefined();
    expect(client.virtualMachineInstanceMigration).toBeDefined();
    expect(client.virtualMachineInstancePreset).toBeDefined();
    expect(client.virtualMachineInstanceReplicaSet).toBeDefined();
  });

  test('should set correct configuration', () => {
    expect(client.config.baseURL).toBe('http://localhost:8080');
    expect(client.config.headers['Authorization']).toBe('Bearer test-token');
    expect(client.config.headers['Content-Type']).toBe('application/json');
  });
}); 