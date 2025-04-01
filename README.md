# Screaming Modular Architecture

A modern implementation of modular architecture in Next.js, following Clean Architecture and Domain-Driven Design principles.

## 🏗️ Architecture

This project implements a "screaming" modular architecture, where the project structure clearly communicates its purpose and organization. The architecture is divided into independent modules, each with its own business logic, presentation, and data handling.

### Project Structure

```
src/
├── modules/           # Independent modules
│   └── [module-name]/
│       ├── components/    # Module-specific components
│       ├── hooks/        # Custom hooks
│       ├── services/     # Services and business logic
│       ├── types/        # Types and interfaces
│       └── utils/        # Module-specific utilities
└── app/              # Next.js routes and pages
```

## 🚀 Core Technologies

- **Next.js 15.2.4** - React framework for production
- **React 19** - UI library
- **TypeScript** - Static typing
- **TanStack Query** - Server state management and caching
- **Zustand** - Client state management
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **TailwindCSS** - Utility-first CSS framework
- **Axios** - HTTP client

## 🛠️ Prerequisites

- Node.js 18.x or higher
- pnpm (recommended) or npm

## 🚀 Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd screaming-modular-architecture
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

## 📝 Available Scripts

- `pnpm dev` - Starts development server with Turbopack
- `pnpm build` - Builds the application for production
- `pnpm start` - Starts the production server
- `pnpm lint` - Runs the linter

## 🎯 Design Principles

1. **Modularity**: Each module is independent and encapsulated
2. **Separation of Concerns**: Clear distinction between business logic, presentation, and data
3. **Dependency Inversion**: Modules depend on abstractions, not concrete implementations
4. **Testability**: Architecture designed to facilitate unit and integration testing

## 🤝 Contributing

Contributions are welcome. Please make sure to:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Edwin Deza - _Initial work_

## 🙏 Acknowledgments

- Next.js Team
- React Team
- Clean Architecture developer community
