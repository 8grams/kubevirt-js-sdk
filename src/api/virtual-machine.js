import { BaseAPI } from './base.js';

/**
 * Virtual Machine API client
 * @class
 * @extends BaseAPI
 */
export class VirtualMachine extends BaseAPI {
  /**
   * List virtual machines across all namespaces
   * @param {object} params - Query parameters
   * @param {string} [params.continue] - The continue option should be set when retrieving more results from the server
   * @param {string} [params.fieldSelector] - A selector to restrict the list of returned objects by their fields
   * @param {boolean} [params.includeUninitialized] - If true, partially initialized resources are included in the response
   * @param {string} [params.labelSelector] - A selector to restrict the list of returned objects by their labels
   * @param {number} [params.limit] - Maximum number of responses to return
   * @param {string} [params.resourceVersion] - Shows changes that occur after that particular version of a resource
   * @param {number} [params.timeoutSeconds] - TimeoutSeconds for the list/watch call
   * @param {boolean} [params.watch] - Watch for changes to the described resources
   * @returns {Promise<Object>} List of virtual machines
   */
  async listAllNamespaces(params = {}) {
    return this.get('/apis/kubevirt.io/v1/virtualmachines', params);
  }

  /**
   * List virtual machines in a namespace
   * @param {string} namespace - Namespace
   * @param {object} params - Query parameters
   * @param {string} [params.continue] - The continue option should be set when retrieving more results from the server
   * @param {string} [params.fieldSelector] - A selector to restrict the list of returned objects by their fields
   * @param {boolean} [params.includeUninitialized] - If true, partially initialized resources are included in the response
   * @param {string} [params.labelSelector] - A selector to restrict the list of returned objects by their labels
   * @param {number} [params.limit] - Maximum number of responses to return
   * @param {string} [params.resourceVersion] - Shows changes that occur after that particular version of a resource
   * @param {number} [params.timeoutSeconds] - TimeoutSeconds for the list/watch call
   * @param {boolean} [params.watch] - Watch for changes to the described resources
   * @returns {Promise<Object>} List of virtual machines
   */
  async list(namespace, params = {}) {
    return this.get(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachines`, params);
  }

  /**
   * Get a virtual machine
   * @param {string} namespace - Namespace
   * @param {string} name - Virtual machine name
   * @param {object} params - Query parameters
   * @param {string} [params.pretty] - If 'true', then the output is pretty printed
   * @returns {Promise<Object>} Virtual machine
   */
  async get(namespace, name, params = {}) {
    return this.get(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachines/${name}`, params);
  }

  /**
   * Create a new virtual machine
   * @param {string} namespace - Namespace
   * @param {object} vm - Virtual machine
   * @param {string} [vm.apiVersion] - APIVersion defines the versioned schema of this representation of an object
   * @param {string} [vm.kind] - Kind is a string value representing the REST resource this object represents
   * @param {object} [vm.metadata] - Standard object's metadata
   * @param {object} vm.spec - Virtual machine specification
   * @param {object} [vm.status] - Virtual machine status
   * @returns {Promise<Object>} Created virtual machine
   */
  async create(namespace, vm) {
    return this.post(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachines`, vm);
  }

  /**
   * Update a virtual machine
   * @param {string} namespace - Namespace
   * @param {string} name - Virtual machine name
   * @param {object} vm - Updated virtual machine
   * @param {string} [vm.apiVersion] - APIVersion defines the versioned schema of this representation of an object
   * @param {string} [vm.kind] - Kind is a string value representing the REST resource this object represents
   * @param {object} [vm.metadata] - Standard object's metadata
   * @param {object} vm.spec - Virtual machine specification
   * @param {object} [vm.status] - Virtual machine status
   * @param {object} params - Query parameters
   * @param {string} [params.pretty] - If 'true', then the output is pretty printed
   * @param {string} [params.dryRun] - When present, indicates that modifications should not be persisted
   * @returns {Promise<Object>} Updated virtual machine
   */
  async update(namespace, name, vm, params = {}) {
    return this.patch(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachines/${name}`, vm, params);
  }

  /**
   * Delete a virtual machine
   * @param {string} namespace - Namespace
   * @param {string} name - Virtual machine name
   * @param {object} params - Query parameters
   * @param {string} [params.pretty] - If 'true', then the output is pretty printed
   * @param {string} [params.dryRun] - When present, indicates that modifications should not be persisted
   * @param {number} [params.gracePeriodSeconds] - The duration in seconds before the object should be deleted
   * @param {string} [params.propagationPolicy] - Whether and how garbage collection will be performed
   * @returns {Promise<Object>} Delete response
   */
  async delete(namespace, name, params = {}) {
    return this.delete(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachines/${name}`, params);
  }

  /**
   * Start a virtual machine
   * @param {string} namespace - Namespace
   * @param {string} name - Virtual machine name
   * @param {object} params - Query parameters
   * @param {string} [params.pretty] - If 'true', then the output is pretty printed
   * @param {string} [params.dryRun] - When present, indicates that modifications should not be persisted
   * @returns {Promise<Object>} Start response
   */
  async start(namespace, name, params = {}) {
    return this.put(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachines/${name}/start`, null, params);
  }

  /**
   * Stop a virtual machine
   * @param {string} namespace - Namespace
   * @param {string} name - Virtual machine name
   * @param {object} params - Query parameters
   * @param {string} [params.pretty] - If 'true', then the output is pretty printed
   * @param {string} [params.dryRun] - When present, indicates that modifications should not be persisted
   * @returns {Promise<Object>} Stop response
   */
  async stop(namespace, name, params = {}) {
    return this.put(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachines/${name}/stop`, null, params);
  }

  /**
   * Restart a virtual machine
   * @param {string} namespace - Namespace
   * @param {string} name - Virtual machine name
   * @param {object} params - Query parameters
   * @param {string} [params.pretty] - If 'true', then the output is pretty printed
   * @param {string} [params.dryRun] - When present, indicates that modifications should not be persisted
   * @returns {Promise<Object>} Restart response
   */
  async restart(namespace, name, params = {}) {
    return this.put(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachines/${name}/restart`, null, params);
  }

  /**
   * Delete all virtual machines in a namespace
   * @param {string} namespace - Namespace
   * @param {object} params - Query parameters
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
    return this.delete(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachines`, params);
  }

  /**
   * Replace a virtual machine
   * @param {string} namespace - Namespace
   * @param {string} name - Virtual machine name
   * @param {object} vm - Updated virtual machine
   * @param {string} [vm.apiVersion] - APIVersion defines the versioned schema of this representation of an object
   * @param {string} [vm.kind] - Kind is a string value representing the REST resource this object represents
   * @param {object} [vm.metadata] - Standard object's metadata
   * @param {object} vm.spec - Virtual machine specification
   * @param {object} [vm.status] - Virtual machine status
   * @param {object} params - Query parameters
   * @param {string} [params.pretty] - If 'true', then the output is pretty printed
   * @param {string} [params.dryRun] - When present, indicates that modifications should not be persisted
   * @returns {Promise<Object>} Updated virtual machine
   */
  async replace(namespace, name, vm, params = {}) {
    return this.put(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachines/${name}`, vm, params);
  }

  /**
   * Watch virtual machines across all namespaces
   * @param {Function} onEvent - Callback function for events
   * @param {object} params - Query parameters
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
    return this.watch('/apis/kubevirt.io/v1/watch/virtualmachines', onEvent, params);
  }

  /**
   * Watch virtual machines in a namespace
   * @param {string} namespace - Namespace
   * @param {Function} onEvent - Callback function for events
   * @param {object} params - Query parameters
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
    return this.watch(`/apis/kubevirt.io/v1/watch/namespaces/${namespace}/virtualmachines`, onEvent, params);
  }
} 