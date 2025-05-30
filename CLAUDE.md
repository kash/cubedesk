# CLAUDE.md - Sonar Project Guide

## Commands

- **Development**: `pnpm dev` - Start dev server
- **Lint**: `pnpm lint` - Run ESLint and find unused exports
- **Build**: `pnpm build` - Build production version
- **TypeCheck**: `tsc --noEmit` - Run TypeScript compiler check
- **DB Migration**: `npx prisma format && npx prisma generate && npx prisma migrate dev` - Run after updating schema.prisma file (NEVER manually modify migration files in migrations/)

## Code Style

- **Naming**: Use camelCase for variables/functions, PascalCase for classes/components
- **Imports**: Group imports by external/internal, sort alphabetically
- **Components**: Use functional React components with hooks
- **Types**: Always use TypeScript types/interfaces, avoid any. Import types from '@/generated/zod' not from '@prisma/client'
- **Error Handling**: Use try/catch blocks for async operations
- **State Management**: Use redux for global state, React Context for component state
- **Mutations**: Use async functions with mutateAsync instead of callbacks; refresh data with window.location.reload() when needed
- **UI Components**: The Dialog component handles its own open/close state through DialogTrigger; don't track this separately
- **Database Queries**: Include permission checks (like org_id) directly in Prisma's where clause rather than fetching first and checking afterward. Always include org_id and deal_id in models/tables for proper data isolation and permission checking
- **Middleware**: For deal-related operations, include the deal in the input and use the deal middleware which validates that the deal belongs to the employee's org
- **Formatting**: Uses prettier with tailwindcss plugin
- **Tests**: Add `test` prefix to test files
- **Icons**: Only use icons from `@phosphor-icons/react/dist/ssr`
- **Toast**: Import and use toast with `const {toast} = useToast()`
- **Linting**: From now on, use pnpm lint for linting
- **Dialogs**: Don't use confirm(), instead, use ConfirmDialog (which is under components/common)

- Import from "@/" if possible (instead of relative import).
- Don't spread properties inside the method signature. Instead, do it on the first line of the function.

## Project Structure

The codebase follows Next.js conventions with TypeScript and Prisma ORM.
