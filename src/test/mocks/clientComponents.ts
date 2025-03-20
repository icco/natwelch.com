import { vi } from 'vitest'

// Mock next/navigation
export const mockUsePathname = vi.fn()
vi.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}))

// Mock next-themes
export const mockUseTheme = vi.fn()
vi.mock('next-themes', () => ({
  useTheme: () => mockUseTheme(),
}))

// Mock next/web-vitals
export const mockUseReportWebVitals = vi.fn()
vi.mock('next/web-vitals', () => ({
  useReportWebVitals: (callback: any) => mockUseReportWebVitals(callback),
}))

// Mock Vivus
export const mockVivus = vi.fn()
vi.mock('vivus', () => ({
  default: vi.fn().mockImplementation(() => ({
    play: vi.fn(),
    stop: vi.fn(),
    reset: vi.fn(),
  })),
}))

// Mock navigator.sendBeacon
export const mockSendBeacon = vi.fn()
Object.defineProperty(navigator, 'sendBeacon', {
  value: mockSendBeacon,
  writable: true,
})

// Mock fetch
export const mockFetch = vi.fn()
global.fetch = mockFetch

// Reset all mocks before each test
export const resetMocks = () => {
  mockUsePathname.mockReset()
  mockUseTheme.mockReset()
  mockUseReportWebVitals.mockReset()
  mockVivus.mockReset()
  mockSendBeacon.mockReset()
  mockFetch.mockReset()
} 