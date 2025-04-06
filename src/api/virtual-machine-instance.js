import { BaseAPI } from './base.js';

/**
 * Virtual Machine Instance API client
 * @class
 * @extends BaseAPI
 */
export class VirtualMachineInstance extends BaseAPI {
  /**
   * List virtual machine instances across all namespaces
   * @param {Object} params - Query parameters
   * @param {string} [params.continue] - The continue option should be set when retrieving more results from the server
   * @param {string} [params.fieldSelector] - A selector to restrict the list of returned objects by their fields
   * @param {boolean} [params.includeUninitialized] - If true, partially initialized resources are included in the response
   * @param {string} [params.labelSelector] - A selector to restrict the list of returned objects by their labels
   * @param {number} [params.limit] - Maximum number of responses to return
   * @param {string} [params.resourceVersion] - Shows changes that occur after that particular version of a resource
   * @param {number} [params.timeoutSeconds] - TimeoutSeconds for the list/watch call
   * @param {boolean} [params.watch] - Watch for changes to the described resources
   * @returns {Promise<Object>} List of virtual machine instances
   */
  async listAllNamespaces(params = {}) {
    return this.get('/apis/kubevirt.io/v1/virtualmachineinstances', params);
  }

  /**
   * Create a new virtual machine instance
   * @param {string} namespace - Namespace
   * @param {Object} instance - Virtual machine instance
   * @param {string} [instance.apiVersion] - APIVersion defines the versioned schema of this representation of an object
   * @param {string} [instance.kind] - Kind is a string value representing the REST resource this object represents
   * @param {Object} [instance.metadata] - Standard object's metadata
   * @param {Object} instance.spec - Virtual machine instance specification
   * @param {Object} [instance.status] - Virtual machine instance status
   * @returns {Promise<Object>} Created virtual machine instance
   */
  async create(namespace, instance) {
    return this.post(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstances`, instance);
  }

  /**
   * List virtual machine instances in a namespace
   * @param {string} namespace - Namespace
   * @param {Object} params - Query parameters
   * @param {string} [params.continue] - The continue option should be set when retrieving more results from the server
   * @param {string} [params.fieldSelector] - A selector to restrict the list of returned objects by their fields
   * @param {boolean} [params.includeUninitialized] - If true, partially initialized resources are included in the response
   * @param {string} [params.labelSelector] - A selector to restrict the list of returned objects by their labels
   * @param {number} [params.limit] - Maximum number of responses to return
   * @param {string} [params.resourceVersion] - Shows changes that occur after that particular version of a resource
   * @param {number} [params.timeoutSeconds] - TimeoutSeconds for the list/watch call
   * @param {boolean} [params.watch] - Watch for changes to the described resources
   * @returns {Promise<Object>} List of virtual machine instances
   */
  async list(namespace, params = {}) {
    return this.get(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstances`, params);
  }

  /**
   * Delete all virtual machine instances in a namespace
   * @param {string} namespace - Namespace
   * @param {Object} params - Query parameters
   * @param {string} [params.continue] - The continue option should be set when retrieving more results from the server
   * @param {string} [params.fieldSelector] - A selector to restrict the list of returned objects by their fields
   * @param {boolean} [params.includeUninitialized] - If true, partially initialized resources are included in the response
   * @param {string} [params.labelSelector] - A selector to restrict the list of returned objects by their labels
   * @param {number} [params.limit] - Maximum number of responses to return
   * @param {string} [params.resourceVersion] - Shows changes that occur after that particular version of a resource
   * @param {number} [params.timeoutSeconds] - TimeoutSeconds for the list/watch call
   * @returns {Promise<Object>} Delete response
   */
  async deleteCollection(namespace, params = {}) {
    return this.delete(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstances`, params);
  }

  /**
   * Get a virtual machine instance
   * @param {string} namespace - Namespace
   * @param {string} name - Instance name
   * @param {Object} params - Query parameters
   * @param {string} [params.pretty] - If 'true', then the output is pretty printed
   * @returns {Promise<Object>} Virtual machine instance
   */
  async get(namespace, name, params = {}) {
    return this.get(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstances/${name}`, params);
  }

  /**
   * Replace a virtual machine instance
   * @param {string} namespace - Namespace
   * @param {string} name - Instance name
   * @param {Object} instance - Updated virtual machine instance
   * @param {string} [instance.apiVersion] - APIVersion defines the versioned schema of this representation of an object
   * @param {string} [instance.kind] - Kind is a string value representing the REST resource this object represents
   * @param {Object} [instance.metadata] - Standard object's metadata
   * @param {Object} instance.spec - Virtual machine instance specification
   * @param {Object} [instance.status] - Virtual machine instance status
   * @param {Object} params - Query parameters
   * @param {string} [params.pretty] - If 'true', then the output is pretty printed
   * @param {string} [params.dryRun] - When present, indicates that modifications should not be persisted
   * @returns {Promise<Object>} Updated virtual machine instance
   */
  async replace(namespace, name, instance, params = {}) {
    return this.put(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstances/${name}`, instance, params);
  }

  /**
   * Delete a virtual machine instance
   * @param {string} namespace - Namespace
   * @param {string} name - Instance name
   * @param {Object} params - Query parameters
   * @param {string} [params.pretty] - If 'true', then the output is pretty printed
   * @param {string} [params.dryRun] - When present, indicates that modifications should not be persisted
   * @param {number} [params.gracePeriodSeconds] - The duration in seconds before the object should be deleted
   * @param {string} [params.propagationPolicy] - Whether and how garbage collection will be performed
   * @returns {Promise<Object>} Delete response
   */
  async delete(namespace, name, params = {}) {
    return this.delete(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstances/${name}`, params);
  }

  /**
   * Get console details for a virtual machine instance
   * @param {string} namespace - Namespace
   * @param {string} name - Instance name
   * @returns {Promise<Object>} Console details
   */
  async getConsole(namespace, name) {
    return this.get(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstances/${name}/console`);
  }

  /**
   * Get VNC details for a virtual machine instance
   * @param {string} namespace - Namespace
   * @param {string} name - Instance name
   * @returns {Promise<Object>} VNC details
   */
  async getVNC(namespace, name) {
    return this.get(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstances/${name}/vnc`);
  }

  /**
   * Get guest OS information for a virtual machine instance
   * @param {string} namespace - Namespace
   * @param {string} name - Instance name
   * @returns {Promise<Object>} Guest OS information
   */
  async getGuestOSInfo(namespace, name) {
    return this.get(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstances/${name}/guestosinfo`);
  }

  /**
   * Get user list for a virtual machine instance
   * @param {string} namespace - Namespace
   * @param {string} name - Instance name
   * @returns {Promise<Object>} User list
   */
  async getUserList(namespace, name) {
    return this.get(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstances/${name}/userlist`);
  }

  /**
   * Get filesystem list for a virtual machine instance
   * @param {string} namespace - Namespace
   * @param {string} name - Instance name
   * @returns {Promise<Object>} Filesystem list
   */
  async getFilesystemList(namespace, name) {
    return this.get(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstances/${name}/filesystemlist`);
  }

  /**
   * Watch virtual machine instances across all namespaces
   * @param {Function} onEvent - Callback function for events
   * @param {Object} params - Query parameters
   * @param {string} [params.continue] - The continue option should be set when retrieving more results from the server
   * @param {string} [params.fieldSelector] - A selector to restrict the list of returned objects by their fields
   * @param {boolean} [params.includeUninitialized] - If true, partially initialized resources are included in the response
   * @param {string} [params.labelSelector] - A selector to restrict the list of returned objects by their labels
   * @param {number} [params.limit] - Maximum number of responses to return
   * @param {string} [params.resourceVersion] - Shows changes that occur after that particular version of a resource
   * @param {number} [params.timeoutSeconds] - TimeoutSeconds for the list/watch call
   * @returns {Promise<Object>} Watch response
   */
  async watchAllNamespaces(onEvent, params = {}) {
    return this.watch('/apis/kubevirt.io/v1/watch/virtualmachineinstances', onEvent, params);
  }

  /**
   * Watch virtual machine instances in a namespace
   * @param {string} namespace - Namespace
   * @param {Function} onEvent - Callback function for events
   * @param {Object} params - Query parameters
   * @param {string} [params.continue] - The continue option should be set when retrieving more results from the server
   * @param {string} [params.fieldSelector] - A selector to restrict the list of returned objects by their fields
   * @param {boolean} [params.includeUninitialized] - If true, partially initialized resources are included in the response
   * @param {string} [params.labelSelector] - A selector to restrict the list of returned objects by their labels
   * @param {number} [params.limit] - Maximum number of responses to return
   * @param {string} [params.resourceVersion] - Shows changes that occur after that particular version of a resource
   * @param {number} [params.timeoutSeconds] - TimeoutSeconds for the list/watch call
   * @returns {Promise<Object>} Watch response
   */
  async watch(namespace, onEvent, params = {}) {
    return this.watch(`/apis/kubevirt.io/v1/watch/namespaces/${namespace}/virtualmachineinstances`, onEvent, params);
  }
} 