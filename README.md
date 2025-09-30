# X402 MCP Example

Example implementation of an MCP server with X402 payment integration, using [@civic/x402-mcp](https://github.com/civicteam/x402-mcp-example.git).

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Generate a wallet and configure environment:
```bash
pnpm generate-wallet > .env
```

3. Edit `.env` and add your receiver wallet address

## Run

```bash
pnpm dev
```

Server runs on `http://localhost:3022/mcp`

## API

The server provides three paid MCP tools:
- `list-todos` - List all todos ($0.001)
- `add-todo` - Add a todo ($0.002)
- `delete-todo` - Delete a todo by index ($0.001)

Payments are handled automatically via X402 protocol.
