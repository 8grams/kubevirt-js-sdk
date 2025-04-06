import { BaseAPI } from './base.js';

/**
 * Virtual Machine Instance Preset API client
 * @class
 * @extends BaseAPI
 */
export class VirtualMachineInstancePreset extends BaseAPI {
  /**
   * List virtual machine instance presets across all namespaces
   * @param {Object} params - Query parameters
   * @param {string} [params.continue] - The continue option should be set when retrieving more results from the server
   * @param {string} [params.fieldSelector] - A selector to restrict the list of returned objects by their fields
   * @param {boolean} [params.includeUninitialized] - If true, partially initialized resources are included in the response
   * @param {string} [params.labelSelector] - A selector to restrict the list of returned objects by their labels
   * @param {number} [params.limit] - Maximum number of responses to return
   * @param {string} [params.resourceVersion] - Shows changes that occur after that particular version of a resource
   * @param {number} [params.timeoutSeconds] - TimeoutSeconds for the list/watch call
   * @param {boolean} [params.watch] - Watch for changes to the described resources
   * @returns {Promise<Object>} List of virtual machine instance presets
   */
  async listAllNamespaces(params = {}) {
    return this.get('/apis/kubevirt.io/v1/virtualmachineinstancepresets', params);
  }

  /**
   * Create a new virtual machine instance preset
   * @param {string} namespace - Namespace
   * @param {Object} preset - Virtual machine instance preset
   * @param {string} [preset.apiVersion] - APIVersion defines the versioned schema of this representation of an object
   * @param {string} [preset.kind] - Kind is a string value representing the REST resource this object represents
   * @param {Object} [preset.metadata] - Standard object's metadata
   * @param {Object} preset.spec - Virtual machine instance preset specification
   * @param {Object} [preset.status] - Virtual machine instance preset status
   * @returns {Promise<Object>} Created virtual machine instance preset
   */
  async create(namespace, preset) {
    return this.post(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstancepresets`, preset);
  }

  /**
   * List virtual machine instance presets in a namespace
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
   * @returns {Promise<Object>} List of virtual machine instance presets
   */
  async list(namespace, params = {}) {
    return this.get(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstancepresets`, params);
  }

  /**
   * Delete all virtual machine instance presets in a namespace
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
    return this.delete(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstancepresets`, params);
  }

  /**
   * Get a virtual machine instance preset
   * @param {string} namespace - Namespace
   * @param {string} name - Preset name
   * @param {Object} params - Query parameters
   * @param {string} [params.pretty] - If 'true', then the output is pretty printed
   * @returns {Promise<Object>} Virtual machine instance preset
   */
  async get(namespace, name, params = {}) {
    return this.get(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstancepresets/${name}`, params);
  }

  /**
   * Replace a virtual machine instance preset
   * @param {string} namespace - Namespace
   * @param {string} name - Preset name
   * @param {Object} preset - Updated virtual machine instance preset
   * @param {string} [preset.apiVersion] - APIVersion defines the versioned schema of this representation of an object
   * @param {string} [preset.kind] - Kind is a string value representing the REST resource this object represents
   * @param {Object} [preset.metadata] - Standard object's metadata
   * @param {Object} preset.spec - Virtual machine instance preset specification
   * @param {Object} [preset.status] - Virtual machine instance preset status
   * @param {Object} params - Query parameters
   * @param {string} [params.pretty] - If 'true', then the output is pretty printed
   * @param {string} [params.dryRun] - When present, indicates that modifications should not be persisted
   * @returns {Promise<Object>} Updated virtual machine instance preset
   */
  async replace(namespace, name, preset, params = {}) {
    return this.put(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstancepresets/${name}`, preset, params);
  }

  /**
   * Delete a virtual machine instance preset
   * @param {string} namespace - Namespace
   * @param {string} name - Preset name
   * @param {Object} params - Query parameters
   * @param {string} [params.pretty] - If 'true', then the output is pretty printed
   * @param {string} [params.dryRun] - When present, indicates that modifications should not be persisted
   * @param {number} [params.gracePeriodSeconds] - The duration in seconds before the object should be deleted
   * @param {string} [params.propagationPolicy] - Whether and how garbage collection will be performed
   * @returns {Promise<Object>} Delete response
   */
  async delete(namespace, name, params = {}) {
    return this.delete(`/apis/kubevirt.io/v1/namespaces/${namespace}/virtualmachineinstancepresets/${name}`, params);
  }

  /**
   * Watch virtual machine instance presets across all namespaces
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
    return this.watch('/apis/kubevirt.io/v1/watch/virtualmachineinstancepresets', onEvent, params);
  }

  /**
   * Watch virtual machine instance presets in a namespace
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
    return this.watch(`/apis/kubevirt.io/v1/watch/namespaces/${namespace}/virtualmachineinstancepresets`, onEvent, params);
  }
} 