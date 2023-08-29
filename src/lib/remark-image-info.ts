import { visit } from 'unist-util-visit'
import type { Plugin } from 'unified'
import { getImageInfo } from '@/utils/image'

const remarkImageInfo: Plugin<[], any> = () => {
  return async tree => {
    const promises: (() => Promise<void>)[] = []
    visit(tree, 'image', (node: any) => {
      promises.push(async () => {
        const { src, width, height, lqip } = await getImageInfo(node.url)

        node.data = {
          hProperties: { src, width, height, lqip },
        }
      })
    })
    await Promise.allSettled(promises.map(t => t()))
  }
}

export default remarkImageInfo
