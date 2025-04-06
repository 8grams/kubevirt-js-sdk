# KubeVirt JavaScript SDK

A JavaScript SDK for interacting with the KubeVirt API.

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

// List virtual machines in a namespace
const vms = await client.virtualMachine.list('default');

// Get a specific virtual machine
const vm = await client.virtualMachine.get('default', 'my-vm');

// Create a new virtual machine
const newVm = await client.virtualMachine.create('default', {
  metadata: {
    name: 'new-vm'
  },
  spec: {
    // VM specification
  }
});

// Start a virtual machine
await client.virtualMachine.start('default', 'my-vm');

// Get virtual machine instance details
const vmi = await client.virtualMachineInstance.get('default', 'my-vm');

// Get VNC connection details
const vnc = await client.virtualMachineInstance.getVNC('default', 'my-vm');

// Create a migration
const migration = await client.virtualMachineInstanceMigration.create('default', {
  metadata: {
    name: 'migration-1'
  },
  spec: {
    vmiName: 'my-vm'
  }
});
```

## API Reference

### Virtual Machine Operations

- `list(namespace)`: List all virtual machines in a namespace
- `get(namespace, name)`: Get a virtual machine by name
- `create(namespace, vm)`: Create a new virtual machine
- `update(namespace, name, vm)`: Update a virtual machine
- `delete(namespace, name)`: Delete a virtual machine
- `start(namespace, name)`: Start a virtual machine
- `stop(namespace, name)`: Stop a virtual machine
- `restart(namespace, name)`: Restart a virtual machine

### Virtual Machine Instance Operations

- `list(namespace)`: List all virtual machine instances in a namespace
- `get(namespace, name)`: Get a virtual machine instance by name
- `delete(namespace, name)`: Delete a virtual machine instance
- `getConsole(namespace, name)`: Get the console of a virtual machine instance
- `getVNC(namespace, name)`: Get the VNC connection details
- `getGuestOSInfo(namespace, name)`: Get the guest OS information
- `getUserList(namespace, name)`: Get the user list
- `getFilesystemList(namespace, name)`: Get the filesystem list

### Virtual Machine Instance Migration Operations

- `list(namespace)`: List all migrations in a namespace
- `get(namespace, name)`: Get a migration by name
- `create(namespace, migration)`: Create a new migration
- `delete(namespace, name)`: Delete a migration
- `cancel(namespace, name)`: Cancel a migration

## License

MIT 