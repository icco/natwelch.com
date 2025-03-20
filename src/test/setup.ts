import { vi } from "vitest"

// Mock next/cache
vi.mock("next/cache", () => ({
  unstable_cache: (fn: () => Promise<unknown>) => fn,
}))
