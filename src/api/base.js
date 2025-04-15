/**
 * Base API client class
 * @class
 */
export class BaseAPI {
  /**
   * Create a new API client
   * @param {object} config - Client configuration
   * @param {string} config.baseURL - Base URL for the API
   * @param {object} config.headers - Custom headers to be sent with each request
   */
  constructor(config) {
    this.config = config;
  }

  /**
   * Build URL with query parameters
   * @param {string} path - API path
   * @param {object} params - Query parameters
   * @returns {string} URL with query parameters
   */
  buildURL(path, params = {}) {
    const url = new URL(path, this.config.baseURL);
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, value);
      }
    });
    return url.toString();
  }

  /**
   * Get a KubeVirt API GroupList
   * @param {string} path - API path
   * @param {object} params - Query parameters
   * @returns {Promise<object>} API response
   */
  async get(path, params = {}) {
    const response = await fetch(this.buildURL(path, params), {
      method: 'GET',
      headers: this.config.headers
    });
    return response.json();
  }

  /**
   * Create a new resource
   * @param {string} path - API path
   * @param {object} data - Resource data
   * @param {object} params - Query parameters
   * @returns {Promise<object>} API response
   */
  async post(path, data, params = {}) {
    const response = await fetch(this.buildURL(path, params), {
      method: 'POST',
      headers: this.config.headers,
      body: JSON.stringify(data)
    });
    return response.json();
  }

  /**
   * Update an existing resource
   * @param {string} path - API path
   * @param {object} data - Resource data
   * @param {object} params - Query parameters
   * @returns {Promise<object>} API response
   */
  async put(path, data, params = {}) {
    const response = await fetch(this.buildURL(path, params), {
      method: 'PUT',
      headers: this.config.headers,
      body: JSON.stringify(data)
    });
    return response.json();
  }

  /**
   * Delete a resource
   * @param {string} path - API path
   * @param {object} params - Query parameters
   * @returns {Promise<object>} API response
   */
  async delete(path, params = {}) {
    const response = await fetch(this.buildURL(path, params), {
      method: 'DELETE',
      headers: this.config.headers
    });
    return response.json();
  }

  /**
   * Watch resources
   * @param {string} path - API path
   * @param {Function} onEvent - Callback function for events
   * @param {object} params - Query parameters
   * @returns {Promise<object>} Watch response
   */
  async watch(path, onEvent, params = {}) {
    const response = await fetch(this.buildURL(path, params), {
      method: 'GET',
      headers: {
        ...this.config.headers,
        'Accept': 'application/json,application/json;stream=watch'
      }
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      const lines = chunk.split('\n').filter(line => line.trim());

      for (const line of lines) {
        try {
          const event = JSON.parse(line);
          onEvent(event);
        } catch (error) {
          console.error('Error parsing watch event:', error);
        }
      }
    }

    return response;
  }
} 