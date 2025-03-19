import "@testing-library/jest-dom"

import { TextDecoder, TextEncoder } from "util"

import React from "react"

// Polyfill TextEncoder/TextDecoder for jsdom
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder as typeof TextDecoder

// Mock Request and Response globals
global.Request = class Request {
  constructor() {
    return {}
  }
} as unknown as typeof Request

global.Response = class Response {
  constructor(body?: BodyInit | null, init?: ResponseInit) {
    return {
      text: async () => body?.toString() || "",
      headers: new Map(Object.entries(init?.headers || {})),
    }
  }
} as unknown as typeof Response

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
  return function Link({
    children,
    href,
  }: {
    children: React.ReactNode
    href: string
  }) {
    return React.createElement("a", { href }, children)
  }
})

// Mock next/cache
jest.mock("next/cache", () => ({
  unstable_cache: (fn: (...args: unknown[]) => unknown) => fn,
}))

// Mock contentlayer/generated
jest.mock("contentlayer/generated", () => ({
  allPages: [
    {
      _id: "1",
      _raw: { sourceFilePath: "wiki/test1.md", type: "Page" },
      type: "Page",
      title: "Test Page 1",
      path: "test1",
      url: "/wiki/test1",
      body: { raw: "Test content 1" },
    },
    {
      _id: "2",
      _raw: { sourceFilePath: "wiki/nested/test2.md", type: "Page" },
      type: "Page",
      title: "Test Page 2",
      path: "nested/test2",
      url: "/wiki/nested/test2",
      body: { raw: "Test content 2" },
    },
  ],
}))
