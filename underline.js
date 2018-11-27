const { createElement, Fragment } = window.wp.element
const {
  registerFormatType,
  unregisterFormatType,
  toggleFormat
} = window.wp.richText
const { __ } = window.wp.i18n
const { RichTextToolbarButton, RichTextShortcut } = window.wp.editor
const type = 'core/underline'

registerFormatType(type, {
  title: __('Underline'),
  tagName: 'u',
  className: null,
  edit({ isActive, value, onChange }) {
    const onToggle = () => onChange(toggleFormat(value, { type }))

    return createElement(
      Fragment,
      null,
      createElement(RichTextShortcut, {
        type: 'access',
        character: 'x',
        onUse: onToggle
      }),
      createElement(RichTextToolbarButton, {
        icon: 'editor-underline',
        title: __('Underline'),
        onClick: onToggle,
        isActive,
        shortcutType: 'access',
        shortcutCharacter: 'x'
      })
    )
  }
})
