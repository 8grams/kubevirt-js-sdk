import { BaseAPI } from './base.js';

/**
 * KubeVirt API client
 * @class
 * @augments BaseAPI
 */
export class KubeVirt extends BaseAPI {
  /**
   * Get API resources
   * @param {object} params - Query parameters
   * @param {string} [params.pretty] - If 'true', then the output is pretty printed
   * @returns {Promise<object>} API resources
   */
  async getAPIResources(params = {}) {
    return this.get('/apis/kubevirt.io/v1/', params);
  }

  /**
   * List KubeVirt resources across all namespaces
   * @param {object} params - Query parameters
   * @param {string} [params.continue] - The continue option should be set when retrieving more results from the server
   * @param {string} [params.fieldSelector] - A selector to restrict the list of returned objects by their fields
   * @param {boolean} [params.includeUninitialized] - If true, partially initialized resources are included in the response
   * @param {string} [params.labelSelector] - A selector to restrict the list of returned objects by their labels
   * @param {number} [params.limit] - Maximum number of responses to return
   * @param {string} [params.resourceVersion] - Shows changes that occur after that particular version of a resource
   * @param {number} [params.timeoutSeconds] - TimeoutSeconds for the list/watch call
   * @param {boolean} [params.watch] - Watch for changes to the described resources
   * @returns {Promise<object>} List of KubeVirt resources
   */
  async listAllNamespaces(params = {}) {
    return this.get('/apis/kubevirt.io/v1/kubevirt', params);
  }

  /**
   * Create a KubeVirt object
   * @param {string} namespace - Object name and auth scope, such as for teams and projects
   * @param {object} kubevirt - KubeVirt object
   * @param {string} [kubevirt.apiVersion] - APIVersion defines the versioned schema of this representation of an object
   * @param {string} [kubevirt.kind] - Kind is a string value representing the REST resource this object represents
   * @param {object} [kubevirt.metadata] - Standard object's metadata
   * @param {object} kubevirt.spec - KubeVirt specification
   * @param {object} [kubevirt.status] - KubeVirt status
   * @returns {Promise<object>} Created KubeVirt object
   */
  async create(namespace, kubevirt) {
    return this.post(`/apis/kubevirt.io/v1/namespaces/${namespace}/kubevirt`, kubevirt);
  }

  /**
   * List KubeVirt resources in a namespace
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
   * @returns {Promise<object>} List of KubeVirt resources
   */
  async list(namespace, params = {}) {
    return this.get(`/apis/kubevirt.io/v1/namespaces/${namespace}/kubevirt`, params);
  }

  /**
   * Delete all KubeVirt resources in a namespace
   * @param {string} namespace - Namespace
   * @param {object} params - Query parameters
   * @param {string} [params.continue] - The continue option should be set when retrieving more results from the server
   * @param {string} [params.fieldSelector] - A selector to restrict the list of returned objects by their fields
   * @param {boolean} [params.includeUninitialized] - If true, partially initialized resources are included in the response
   * @param {string} [params.labelSelector] - A selector to restrict the list of returned objects by their labels
   * @param {number} [params.limit] - Maximum number of responses to return
   * @param {string} [params.resourceVersion] - Shows changes that occur after that particular version of a resource
   * @param {number} [params.timeoutSeconds] - TimeoutSeconds for the list/watch call
   * @returns {Promise<object>} Delete response
   */
  async deleteCollection(namespace, params = {}) {
    return this.delete(`/apis/kubevirt.io/v1/namespaces/${namespace}/kubevirt`, params);
  }

  /**
   * Get a KubeVirt resource
   * @param {string} namespace - Namespace
   * @param {string} name - Resource name
   * @param {object} params - Query parameters
   * @param {string} [params.pretty] - If 'true', then the output is pretty printed
   * @returns {Promise<object>} KubeVirt resource
   */
  async get(namespace, name, params = {}) {
    return this.get(`/apis/kubevirt.io/v1/namespaces/${namespace}/kubevirt/${name}`, params);
  }

  /**
   * Replace a KubeVirt resource
   * @param {string} namespace - Namespace
   * @param {string} name - Resource name
   * @param {object} kubevirt - Updated KubeVirt resource
   * @param {string} [kubevirt.apiVersion] - APIVersion defines the versioned schema of this representation of an object
   * @param {string} [kubevirt.kind] - Kind is a string value representing the REST resource this object represents
   * @param {object} [kubevirt.metadata] - Standard object's metadata
   * @param {object} kubevirt.spec - KubeVirt specification
   * @param {object} [kubevirt.status] - KubeVirt status
   * @param {object} params - Query parameters
   * @param {string} [params.pretty] - If 'true', then the output is pretty printed
   * @param {string} [params.dryRun] - When present, indicates that modifications should not be persisted
   * @returns {Promise<object>} Updated KubeVirt resource
   */
  async replace(namespace, name, kubevirt, params = {}) {
    return this.put(`/apis/kubevirt.io/v1/namespaces/${namespace}/kubevirt/${name}`, kubevirt, params);
  }

  /**
   * Delete a KubeVirt resource
   * @param {string} namespace - Namespace
   * @param {string} name - Resource name
   * @param {object} params - Query parameters
   * @param {string} [params.pretty] - If 'true', then the output is pretty printed
   * @param {string} [params.dryRun] - When present, indicates that modifications should not be persisted
   * @param {number} [params.gracePeriodSeconds] - The duration in seconds before the object should be deleted
   * @param {string} [params.propagationPolicy] - Whether and how garbage collection will be performed
   * @returns {Promise<object>} Delete response
   */
  async delete(namespace, name, params = {}) {
    return this.delete(`/apis/kubevirt.io/v1/namespaces/${namespace}/kubevirt/${name}`, params);
  }

  /**
   * Watch KubeVirt resources across all namespaces
   * @param {Function} onEvent - Callback function for events
   * @param {object} params - Query parameters
   * @param {string} [params.continue] - The continue option should be set when retrieving more results from the server
   * @param {string} [params.fieldSelector] - A selector to restrict the list of returned objects by their fields
   * @param {boolean} [params.includeUninitialized] - If true, partially initialized resources are included in the response
   * @param {string} [params.labelSelector] - A selector to restrict the list of returned objects by their labels
   * @param {number} [params.limit] - Maximum number of responses to return
   * @param {string} [params.resourceVersion] - Shows changes that occur after that particular version of a resource
   * @param {number} [params.timeoutSeconds] - TimeoutSeconds for the list/watch call
   * @returns {Promise<object>} Watch response
   */
  async watchAllNamespaces(onEvent, params = {}) {
    return this.watch('/apis/kubevirt.io/v1/watch/kubevirt', onEvent, params);
  }

  /**
   * Watch KubeVirt resources in a namespace
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
   * @returns {Promise<object>} Watch response
   */
  async watch(namespace, onEvent, params = {}) {
    return this.watch(`/apis/kubevirt.io/v1/watch/namespaces/${namespace}/kubevirt`, onEvent, params);
  }
} 