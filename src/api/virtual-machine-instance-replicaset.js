import { BaseAPI } from './base.js';

/**
 * Virtual Machine Instance ReplicaSet API client
 * @class
 * @extends BaseAPI
 */
export class VirtualMachineInstanceReplicaSet extends BaseAPI {
  /**
   * List virtual machine instance replicasets across all namespaces
   * @param {object} params - Query parameters
   * @param {string} [params.continue] - The continue option should be set when retrieving more results from the server
   * @param {string} [params.fieldSelector] - A selector to restrict the list of returned objects by their fields
   * @param {boolean} [params.includeUninitialized] - If true, partially initialized resources are included in the response
   * @param {string} [params.labelSelector] - A selector to restrict the list of returned objects by their labels
   * @param {number} [params.limit] - Maximum number of responses to return
   * @param {string} [params.resourceVersion] - Shows changes that occur after that particular version of a resource
   * @param {number} [params.timeoutSeconds] - TimeoutSeconds for the list/watch call
   * @param {boolean} [params.watch] - Watch for changes to the described resources
   * @returns {Promise<Object>} List of virtual machine instance replicasets
   */
  async listAllNamespaces(params = {}) {
    return this.get('/apis/kubevirt.io/v1/virtualmachineinstancereplicasets', params);
  }

  /**
   * Create a new virtual machine instance replicaset
   * @param {string} namespace - Namespace
   * @param {object} replicaset - Virtual machine instance replicaset
   * @param {string} [replicaset.apiVersion] - APIVersion defines the versioned schema of this representation of an object
   * @param {string} [replicaset.kind] - Kind is a string value representing the REST resource this object represents
   * @param {object} [replicaset.metadata] - Standard object's metadata
   * @param {object} replicaset.spec - Virtual machine instance replicaset specification
   * @param {object} [replicaset.status] - Virtual machine instance replicaset status
   * @returns {Promise<Object>} Created virtual machine instance replicaset
   */
  async create(namespace, replicaset) {
    return this.post(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstancereplicasets`, replicaset);
  }

  /**
   * List virtual machine instance replicasets in a namespace
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
   * @returns {Promise<Object>} List of virtual machine instance replicasets
   */
  async list(namespace, params = {}) {
    return this.get(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstancereplicasets`, params);
  }

  /**
   * Delete all virtual machine instance replicasets in a namespace
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
    return this.delete(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstancereplicasets`, params);
  }

  /**
   * Get a virtual machine instance replicaset
   * @param {string} namespace - Namespace
   * @param {string} name - Replicaset name
   * @param {object} params - Query parameters
   * @param {string} [params.pretty] - If 'true', then the output is pretty printed
   * @returns {Promise<Object>} Virtual machine instance replicaset
   */
  async get(namespace, name, params = {}) {
    return this.get(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstancereplicasets/${name}`, params);
  }

  /**
   * Replace a virtual machine instance replicaset
   * @param {string} namespace - Namespace
   * @param {string} name - Replicaset name
   * @param {object} replicaset - Updated virtual machine instance replicaset
   * @param {string} [replicaset.apiVersion] - APIVersion defines the versioned schema of this representation of an object
   * @param {string} [replicaset.kind] - Kind is a string value representing the REST resource this object represents
   * @param {object} [replicaset.metadata] - Standard object's metadata
   * @param {object} replicaset.spec - Virtual machine instance replicaset specification
   * @param {object} [replicaset.status] - Virtual machine instance replicaset status
   * @param {object} params - Query parameters
   * @param {string} [params.pretty] - If 'true', then the output is pretty printed
   * @param {string} [params.dryRun] - When present, indicates that modifications should not be persisted
   * @returns {Promise<Object>} Updated virtual machine instance replicaset
   */
  async replace(namespace, name, replicaset, params = {}) {
    return this.put(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstancereplicasets/${name}`, replicaset, params);
  }

  /**
   * Delete a virtual machine instance replicaset
   * @param {string} namespace - Namespace
   * @param {string} name - Replicaset name
   * @param {object} params - Query parameters
   * @param {string} [params.pretty] - If 'true', then the output is pretty printed
   * @param {string} [params.dryRun] - When present, indicates that modifications should not be persisted
   * @param {number} [params.gracePeriodSeconds] - The duration in seconds before the object should be deleted
   * @param {string} [params.propagationPolicy] - Whether and how garbage collection will be performed
   * @returns {Promise<Object>} Delete response
   */
  async delete(namespace, name, params = {}) {
    return this.delete(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstancereplicasets/${name}`, params);
  }

  /**
   * Watch virtual machine instance replicasets across all namespaces
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
    return this.watch('/apis/kubevirt.io/v1/watch/virtualmachineinstancereplicasets', onEvent, params);
  }

  /**
   * Watch virtual machine instance replicasets in a namespace
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
    return this.watch(`/apis/kubevirt.io/v1/watch/namespaces/${namespace}/virtualmachineinstancereplicasets`, onEvent, params);
  }
} 