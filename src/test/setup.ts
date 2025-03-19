import "@testing-library/jest-dom"
import { TextEncoder, TextDecoder } from "util"
import React from "react"

// Polyfill TextEncoder/TextDecoder for jsdom
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder as any

// Mock Request and Response globals
global.Request = class Request {
  constructor() {
    return {}
  }
} as any

global.Response = class Response {
  constructor(body?: BodyInit | null, init?: ResponseInit) {
    return {
      text: async () => body?.toString() || "",
      headers: new Map(Object.entries(init?.headers || {})),
    }
  }
} as any

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

// Mock next/cache
jest.mock("next/cache", () => ({
  unstable_cache: (fn: Function) => fn,
}))

// Mock contentlayer/generated
jest.mock("contentlayer/generated", () => ({
  allPages: require("./mocks/contentlayer").allPages,
})) 