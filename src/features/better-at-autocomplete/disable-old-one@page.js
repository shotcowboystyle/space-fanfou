import elementReady from 'element-ready'
import requireFanfouLib from '@libs/requireFanfouLib'
import keepRetry from '@libs/keepRetry'

export default () => {
  let $textarea

  return {
    async applyWhen() {
      const $ = await requireFanfouLib('jQuery')
      const textarea = await elementReady('#phupdate textarea')

      return textarea && ($textarea = $(textarea))
    },

    waitReady: () => keepRetry({
      checker: () => (
        $textarea?.autocomplete?.('option', 'disabled') === false
      ),
      until: () => document.readyState === 'complete',
    }),

    onLoad() {
      $textarea.autocomplete('disable')
    },

    onUnload() {
      $textarea.autocomplete('enable')
    },
  }
}
