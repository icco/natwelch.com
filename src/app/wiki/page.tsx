import { Metadata } from "next"

import Footer from "@/components/Footer"
import { buildTree, getPaths, Tree } from "@/components/Lists"

import { allPages } from "../../.contentlayer/generated"

export const metadata: Metadata = {
  title: "Nat Welch | Wiki",
}

export default function Home() {
  const tree = buildTree(getPaths(allPages), allPages)

  return (
    <>
      <section className="prose lg:prose-xl">
        <h1 className="">Wiki</h1>
        <div className="mx-auto max-w-xl py-8">
          <Tree items={tree} />
        </div>
      </section>
      <Footer />
    </>
  )
}
