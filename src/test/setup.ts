import "@testing-library/jest-dom"
import { TextEncoder, TextDecoder } from "util"
import React from "react"

// Polyfill TextEncoder/TextDecoder for jsdom
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder as any

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
}))

// Mock next/link
jest.mock("next/link", () => {
  return function Link({ children, href }: { children: React.ReactNode; href: string }) {
    return React.createElement("a", { href }, children)
  }
}) 