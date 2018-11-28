const { createElement, Fragment } = window.wp.element
const { registerFormatType, unregisterFormatType } = window.wp.richText
const { __ } = window.wp.i18n
const { RichTextToolbarButton, RichTextShortcut } = window.wp.editor
const { G, Path, SVG } = window.wp.components

const type = 'core/tr'

registerFormatType(type, {
  title: __('見出しセル'),
  tagName: 'tr',
  className: null,
  edit({ value, onChange }) {
    const isActive =
      $('.wp-block-table td.is-selected[data-th="true"]').length !== 0
    const onToggle = () => {
      const $td = $('.wp-block-table td.is-selected')
      if ($td.attr('data-th') == 'true') {
        $td.attr('data-th', false)
      } else {
        $td.attr('data-th', true)
      }
    }
    const toolbarButton = createElement(RichTextToolbarButton, {
      icon: (
        <SVG viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <Path d="M0 6v22h32v-22h-32zM12 20v-4h8v4h-8zM20 22v4h-8v-4h8zM20 10v4h-8v-4h8zM10 10v4h-8v-4h8zM2 16h8v4h-8v-4zM22 16h8v4h-8v-4zM22 14v-4h8v4h-8zM2 22h8v4h-8v-4zM22 26v-4h8v4h-8z" />
        </SVG>
      ),
      title: __('見出しセル'),
      onClick: onToggle,
      isActive,
      shortcutType: 'access',
      shortcutCharacter: 'tr'
    })

    return createElement(
      Fragment,
      null,
      createElement(RichTextShortcut, {
        type: 'access',
        character: 'tr',
        onUse: onToggle
      }),
      toolbarButton
    )
  }
})
