# KubeVirt JavaScript SDK

A comprehensive JavaScript SDK for interacting with the KubeVirt API. This library provides a simple and intuitive interface for managing virtual machines and related resources in a Kubernetes cluster.

## Features

- Full support for KubeVirt API operations
- TypeScript support with type definitions
- Modern ES6+ JavaScript
- Promise-based API
- Comprehensive documentation
- Built-in error handling
- Support for all KubeVirt resources:
  - Virtual Machines
  - Virtual Machine Instances
  - Virtual Machine Instance Migrations
  - Virtual Machine Instance Presets
  - Virtual Machine Instance ReplicaSets

## Installation

```bash
npm install kubevirt-js-sdk
```

## Usage

```javascript
import { KubeVirtClient } from 'kubevirt-js-sdk';

// Create a new client
const client = new KubeVirtClient({
  baseURL: 'https://your-kubevirt-api-server',
  headers: {
    'Authorization': 'Bearer your-token'
  }
});

// List all virtual machines
const vms = await client.virtualMachine.listAllNamespaces();

// Create a new virtual machine
const newVM = await client.virtualMachine.create('default', {
  apiVersion: 'kubevirt.io/v1',
  kind: 'VirtualMachine',
  metadata: {
    name: 'test-vm'
  },
  spec: {
    // VM specification
  }
});

// Start a virtual machine
await client.virtualMachine.start('default', 'test-vm');
```

## API Documentation

For detailed API documentation, please refer to the [API Reference](https://kubevirt.io/api-reference/).

## Development

### Prerequisites

- Node.js >= 14.0.0
- npm >= 6.0.0

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Building

```bash
npm run build
```

### Testing

```bash
npm test
```

### Linting

```bash
npm run lint
```

## Publishing

This package is automatically published to npm using GitHub Actions:

- Pushes to the `main` branch are published with the `latest` tag
- Tagged releases (e.g., `v1.0.0`) are published with the corresponding version tag

To create a new release:

1. Update the version in `package.json`
2. Create a new tag:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

The GitHub Actions workflow will automatically publish the package to npm.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please open an issue in the GitHub repository. 