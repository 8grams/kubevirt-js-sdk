/**
 * KubeVirt JavaScript SDK
 * @module kubevirt-js-sdk
 */

import { KubeVirt } from './api/kubevirt.js';
import { VirtualMachine } from './api/virtual-machine.js';
import { VirtualMachineInstance } from './api/virtual-machine-instance.js';
import { VirtualMachineInstanceMigration } from './api/virtual-machine-instance-migration.js';
import { VirtualMachineInstancePreset } from './api/virtual-machine-instance-preset.js';
import { VirtualMachineInstanceReplicaSet } from './api/virtual-machine-instance-replicaset.js';

/**
 * KubeVirt client class
 * @class
 */
export class KubeVirtClient {
  /**
   * Create a new KubeVirt client
   * @param {object} config - Client configuration
   * @param {string} config.baseURL - Base URL for the KubeVirt API
   * @param {object} config.headers - Custom headers to be sent with each request
   */
  constructor(config) {
    this.config = {
      baseURL: config.baseURL,
      headers: {
        'Content-Type': 'application/json',
        ...config.headers
      }
    };

    // Initialize API clients
    this.kubevirt = new KubeVirt(this.config);
    this.virtualMachine = new VirtualMachine(this.config);
    this.virtualMachineInstance = new VirtualMachineInstance(this.config);
    this.virtualMachineInstanceMigration = new VirtualMachineInstanceMigration(this.config);
    this.virtualMachineInstancePreset = new VirtualMachineInstancePreset(this.config);
    this.virtualMachineInstanceReplicaSet = new VirtualMachineInstanceReplicaSet(this.config);
  }
} 