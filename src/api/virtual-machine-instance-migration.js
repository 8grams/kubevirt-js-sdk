import { BaseAPI } from './base.js';

/**
 * Virtual Machine Instance Migration API client
 * @class
 * @extends BaseAPI
 */
export class VirtualMachineInstanceMigration extends BaseAPI {
  /**
   * List virtual machine instance migrations across all namespaces
   * @returns {Promise<Object>} List of virtual machine instance migrations
   */
  async listAllNamespaces() {
    return this.get('/apis/kubevirt.io/v1/virtualmachineinstancemigrations');
  }

  /**
   * List virtual machine instance migrations in a namespace
   * @param {string} namespace - Namespace
   * @returns {Promise<Object>} List of virtual machine instance migrations
   */
  async list(namespace) {
    return this.get(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstancemigrations`);
  }

  /**
   * Get a virtual machine instance migration
   * @param {string} namespace - Namespace
   * @param {string} name - Migration name
   * @returns {Promise<Object>} Virtual machine instance migration
   */
  async get(namespace, name) {
    return this.get(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstancemigrations/${name}`);
  }

  /**
   * Create a new virtual machine instance migration
   * @param {string} namespace - Namespace
   * @param {Object} migration - Virtual machine instance migration specification
   * @returns {Promise<Object>} Created virtual machine instance migration
   */
  async create(namespace, migration) {
    return this.post(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstancemigrations`, migration);
  }

  /**
   * Delete all virtual machine instance migrations in a namespace
   * @param {string} namespace - Namespace
   * @returns {Promise<Object>} Delete response
   */
  async deleteCollection(namespace) {
    return this.delete(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstancemigrations`);
  }

  /**
   * Replace a virtual machine instance migration
   * @param {string} namespace - Namespace
   * @param {string} name - Migration name
   * @param {Object} migration - Updated virtual machine instance migration specification
   * @returns {Promise<Object>} Updated virtual machine instance migration
   */
  async replace(namespace, name, migration) {
    return this.put(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstancemigrations/${name}`, migration);
  }

  /**
   * Delete a virtual machine instance migration
   * @param {string} namespace - Namespace
   * @param {string} name - Migration name
   * @returns {Promise<Object>} Delete response
   */
  async delete(namespace, name) {
    return this.delete(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstancemigrations/${name}`);
  }

  /**
   * Watch virtual machine instance migrations across all namespaces
   * @param {Function} onEvent - Callback function for events
   * @returns {Promise<Object>} Watch response
   */
  async watchAllNamespaces(onEvent) {
    return this.watch('/apis/kubevirt.io/v1/watch/virtualmachineinstancemigrations', onEvent);
  }

  /**
   * Watch virtual machine instance migrations in a namespace
   * @param {string} namespace - Namespace
   * @param {Function} onEvent - Callback function for events
   * @returns {Promise<Object>} Watch response
   */
  async watch(namespace, onEvent) {
    return this.watch(`/apis/kubevirt.io/v1/watch/namespaces/${namespace}/virtualmachineinstancemigrations`, onEvent);
  }
} 