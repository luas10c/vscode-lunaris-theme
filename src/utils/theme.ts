import { palette } from './palette.js'

export const theme = (name: string, bordered?: boolean) => {
  // vscode://schemas/color-theme
  return {
    name,
    type: 'dark',
    semanticHighlighting: true,
    tokenColors: [
      {
        name: 'Destructuring / aliasing reference name (LHS)',
        scope: [
          'meta.import variable.other.readwrite',
          'meta.variable.assignment.destructured.object.coffee variable'
        ],
        settings: {
          fontStyle: 'italic',
          foreground: '#4d86c2'
        }
      },
      {
        name: 'Destructuring / aliasing variable name (RHS)',
        scope: [
          'meta.import variable.other.readwrite.alias',
          'meta.export variable.other.readwrite.alias',
          'meta.variable.assignment.destructured.object.coffee variable variable'
        ],
        settings: {
          fontStyle: 'normal',
          foreground: '#4d86c2'
        }
      },

      {
        name: 'HTML tags',
        scope: ['entity.name.tag'],
        settings: {
          foreground: '#99f092'
        }
      },
      {
        name: 'CSS attribute parent selectors ("&")',
        scope: ['entity.other.attribute-name.parent-selector'],
        settings: {
          foreground: '#70a8b5'
        }
      },
      {
        name: 'HTML/CSS attribute names',
        scope: ['entity.other.attribute-name'],
        settings: {
          foreground: '#a873de',
          fontStyle: 'italic'
        }
      },
      {
        name: 'Integers',
        scope: ['constant.numeric'],
        settings: {
          foreground: '#d56fb2'
        }
      },

      {
        scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
        settings: {
          foreground: '#6a737d'
        }
      },
      {
        scope: [
          'constant',
          'entity.name.constant',
          'variable.other.constant',
          'variable.language'
        ],
        settings: {
          foreground: '#e6bb6a'
        }
      },
      {
        scope: ['entity', 'entity.name'],
        settings: {
          foreground: '#99f092'
        }
      },
      {
        scope: 'variable.parameter.function',
        settings: {
          foreground: '#e1e4e8'
        }
      },
      {
        scope: 'entity.name.tag',
        settings: {
          foreground: '#85e89d'
        }
      },

      {
        name: 'Objects Key YML',
        scope: ['entity.name.tag.yaml'],
        settings: {
          foreground: palette.blue.lighten(0.2).hex()
        }
      },

      {
        name: 'Keywords',
        scope: 'keyword',
        settings: {
          foreground: '#70a8b5'
        }
      },
      {
        name: 'Keyword "new"',
        scope: ['keyword.control.new', 'keyword.operator.new'],
        settings: {
          fontStyle: 'bold'
        }
      },

      {
        scope: ['storage', 'storage.type'],
        settings: {
          foreground: '#70a8b5'
        }
      },
      {
        scope: [
          'storage.modifier.package',
          'storage.modifier.import',
          'storage.type.java'
        ],
        settings: {
          foreground: '#e1e4e8'
        }
      },

      {
        name: 'Strings',
        scope: [
          'string',
          'punctuation.definition.string',
          'string punctuation.section.embedded source'
        ],
        settings: {
          foreground: '#a8cb8f'
        }
      },

      {
        scope: 'support',
        settings: {
          foreground: '#86bad3'
        }
      },
      {
        scope: 'meta.property-name',
        settings: {
          foreground: '#86bad3'
        }
      },
      {
        scope: 'variable',
        settings: {
          foreground: '#ffab70'
        }
      },
      {
        scope: 'variable.other',
        settings: {
          foreground: '#e1e4e8'
        }
      },
      {
        scope: 'invalid.broken',
        settings: {
          fontStyle: 'italic',
          foreground: '#fdaeb7'
        }
      },
      {
        scope: 'invalid.deprecated',
        settings: {
          fontStyle: 'italic',
          foreground: '#fdaeb7'
        }
      },
      {
        scope: 'invalid.illegal',
        settings: {
          fontStyle: 'italic',
          foreground: '#fdaeb7'
        }
      },
      {
        scope: 'invalid.unimplemented',
        settings: {
          fontStyle: 'italic',
          foreground: '#fdaeb7'
        }
      },
      {
        scope: 'carriage-return',
        settings: {
          fontStyle: 'italic underline',
          background: '#70a8b5',
          foreground: '#24292e',
          content: '^M'
        }
      },
      {
        scope: 'message.error',
        settings: {
          foreground: '#fdaeb7'
        }
      },
      {
        scope: 'string source',
        settings: {
          foreground: '#e1e4e8'
        }
      },
      {
        scope: 'string variable',
        settings: {
          foreground: '#86bad3'
        }
      },
      {
        scope: ['source.regexp', 'string.regexp'],
        settings: {
          foreground: '#dbedff'
        }
      },
      {
        scope: [
          'string.regexp.character-class',
          'string.regexp constant.character.escape',
          'string.regexp source.ruby.embedded',
          'string.regexp string.regexp.arbitrary-repitition'
        ],
        settings: {
          foreground: '#dbedff'
        }
      },
      {
        scope: 'string.regexp constant.character.escape',
        settings: {
          fontStyle: 'bold',
          foreground: '#85e89d'
        }
      },
      {
        scope: 'support.constant',
        settings: {
          foreground: '#86bad3'
        }
      },
      {
        scope: 'support.variable',
        settings: {
          foreground: '#86bad3'
        }
      },
      {
        scope: 'meta.module-reference',
        settings: {
          foreground: '#86bad3'
        }
      },
      {
        scope: 'punctuation.definition.list.begin.markdown',
        settings: {
          foreground: '#ffab70'
        }
      },
      {
        scope: ['markup.heading', 'markup.heading entity.name'],
        settings: {
          fontStyle: 'bold',
          foreground: '#86bad3'
        }
      },
      {
        scope: 'markup.quote',
        settings: {
          foreground: '#85e89d'
        }
      },
      {
        scope: 'markup.italic',
        settings: {
          fontStyle: 'italic',
          foreground: '#e1e4e8'
        }
      },
      {
        scope: 'markup.bold',
        settings: {
          fontStyle: 'bold',
          foreground: '#e1e4e8'
        }
      },
      {
        scope: 'markup.raw',
        settings: {
          foreground: '#86bad3'
        }
      },
      {
        scope: [
          'markup.deleted',
          'meta.diff.header.from-file',
          'punctuation.definition.deleted'
        ],
        settings: {
          background: '#86181d',
          foreground: '#fdaeb7'
        }
      },
      {
        scope: [
          'markup.inserted',
          'meta.diff.header.to-file',
          'punctuation.definition.inserted'
        ],
        settings: {
          background: '#144620',
          foreground: '#85e89d'
        }
      },
      {
        scope: ['markup.changed', 'punctuation.definition.changed'],
        settings: {
          background: '#c24e00',
          foreground: '#ffab70'
        }
      },
      {
        scope: ['markup.ignored', 'markup.untracked'],
        settings: {
          foreground: '#2f363d',
          background: '#86bad3'
        }
      },
      {
        scope: 'meta.diff.range',
        settings: {
          foreground: '#b392f0',
          fontStyle: 'bold'
        }
      },
      {
        scope: 'meta.diff.header',
        settings: {
          foreground: '#86bad3'
        }
      },
      {
        scope: 'meta.separator',
        settings: {
          fontStyle: 'bold',
          foreground: '#86bad3'
        }
      },
      {
        scope: 'meta.output',
        settings: {
          foreground: '#86bad3'
        }
      },
      {
        scope: [
          'brackethighlighter.tag',
          'brackethighlighter.curly',
          'brackethighlighter.round',
          'brackethighlighter.square',
          'brackethighlighter.angle',
          'brackethighlighter.quote'
        ],
        settings: {
          foreground: '#d1d5da'
        }
      },
      {
        scope: 'brackethighlighter.unmatched',
        settings: {
          foreground: '#fdaeb7'
        }
      },
      {
        scope: ['constant.other.reference.link', 'string.other.link'],
        settings: {
          foreground: '#dbedff',
          fontStyle: 'underline'
        }
      }
    ],
    colors: {
      'foreground': '#cccccc',
      'focusBorder': palette.cyan.hex(),
      'selection.background': palette.cyan.darken(0.3).hex(),
      'scrollbar.shadow': '#000000',
      'activityBar.foreground': palette.white.darken(0.1).hex(),
      'activityBar.background': palette.stale.hex(),
      'activityBar.inactiveForeground': palette.white.darken(0.5).hex(),
      'activityBar.activeBorder': palette.cyan.hex(),
      'activityBar.activeFocusBorder': palette.stale.hex(),
      'activityBarBadge.foreground': '#ffffff',
      'activityBarBadge.background': palette.cyan.hex(),
      'sideBar.background': palette.stale.lighten(0.02).hex(),
      'sideBar.foreground': '#cccccc',
      'sideBarSectionHeader.background': '#00000000',
      'sideBarSectionHeader.foreground': '#cccccc',
      'sideBarSectionHeader.border': '#cccccc33',
      'sideBarTitle.foreground': '#bbbbbb',
      'list.inactiveSelectionBackground': palette.stale.lighten(0.2).hex(),
      'list.inactiveSelectionForeground': '#cccccc',
      'list.hoverBackground': palette.stale.lighten(0.05).hex(),
      'list.hoverForeground': '#cccccc',
      'list.activeSelectionBackground': palette.stale.lighten(0.5).hex(),
      'list.activeSelectionForeground': '#ffffff',
      'tree.indentGuidesStroke': palette.stale.lighten(0.05).hex(),
      'list.dropBackground': palette.stale.lighten(0.05).hex(),
      'list.highlightForeground': palette.cyan.hex(),
      'list.focusBackground': palette.stale.lighten(0.5).hex(),
      'list.focusForeground': '#cccccc',
      'listFilterWidget.background': '#653723',
      'listFilterWidget.outline': '#00000000',
      'listFilterWidget.noMatchesOutline': '#be1100',
      'statusBar.foreground': '#ffffff',
      'statusBar.background': palette.stale.hex(),
      'statusBarItem.hoverBackground': '#ffffff1f',
      'statusBar.debuggingBackground': palette.orange.hex(),
      'statusBar.debuggingForeground': '#ffffff',
      'statusBar.noFolderBackground': palette.stale.lighten(0.1).hex(),
      'statusBar.noFolderForeground': '#ffffff',
      'statusBarItem.remoteBackground': palette.cyan.hex(),
      'statusBarItem.remoteForeground': '#ffffff',
      'titleBar.activeBackground': palette.stale.hex(),
      'titleBar.activeForeground': '#cccccc',
      'titleBar.inactiveBackground': palette.stale.darken(0.04).hex(),
      'titleBar.inactiveForeground': '#cccccc99',
      'titleBar.border': '#00000000',
      'menubar.selectionForeground': '#cccccc',
      'menubar.selectionBackground': '#ffffff1a',
      'menu.foreground': '#cccccc',
      'menu.background': palette.stale.hex(),
      'menu.selectionForeground': '#ffffff',
      'menu.selectionBackground': palette.cyan.hex(),
      'menu.selectionBorder': '#00000000',
      'menu.separatorBackground': palette.stale.lighten(0.05).hex(),
      'menu.border': palette.stale.lighten(0.1).hex(),
      'button.background': palette.cyan.hex(),
      'button.foreground': '#ffffff',
      'button.hoverBackground': palette.cyan.lighten(0.1).hex(),
      'button.secondaryForeground': '#ffffff',
      'button.secondaryBackground': '#3a3d41',
      'button.secondaryHoverBackground': '#45494e',
      'input.background': palette.stale.hex(),
      'input.border': '#00000000',
      'input.foreground': '#cccccc',
      'inputOption.activeBackground': palette.cyan.lighten(0.1).hex(),
      'inputOption.activeBorder': '#007acc00',
      'inputOption.activeForeground': '#ffffff',
      'input.placeholderForeground': '#a6a6a6',
      'textLink.foreground': palette.cyan.hex(),
      'textLink.activeForeground': palette.cyan.lighten(0.1).hex(),
      'editor.background': palette.stale.hex(),
      'editor.foreground': '#d4d4d4',
      'editorLineNumber.foreground': '#858585',
      'editorCursor.foreground': '#aeafad',
      'editorCursor.background': '#000000',
      'editor.selectionBackground': '#264f78',
      'editor.inactiveSelectionBackground': '#3a3d41',
      'editorWhitespace.foreground': '#e3e4e229',
      'editor.selectionHighlightBackground': '#add6ff26',
      'editor.selectionHighlightBorder': '#495F77',
      'editor.findMatchBackground': '#515c6a',
      'editor.findMatchBorder': '#74879f',
      'editor.findMatchHighlightBackground': '#ea5c0055',
      'editor.findMatchHighlightBorder': '#ffffff00',
      'editor.findRangeHighlightBackground': '#3a3d4166',
      'editor.findRangeHighlightBorder': '#ffffff00',
      'editor.rangeHighlightBackground': '#ffffff0b',
      'editor.rangeHighlightBorder': '#ffffff00',
      'editor.hoverHighlightBackground': '#264f7840',
      'editor.wordHighlightStrongBackground': '#004972b8',
      'editor.wordHighlightBackground': '#575757b8',
      'editor.lineHighlightBackground': '#ffffff0A',
      'editor.lineHighlightBorder': '#282828',
      'editorLineNumber.activeForeground': '#c6c6c6',
      'editorLink.activeForeground': palette.cyan.lighten(0.05).hex(),
      'editorIndentGuide.background': '#404040',
      'editorIndentGuide.activeBackground': '#707070',
      'editorRuler.foreground': '#5a5a5a',
      'editorBracketMatch.background': '#0064001a',
      'editorBracketMatch.border': '#888888',
      'editor.foldBackground': '#264f784d',
      'editorOverviewRuler.background': '#25252500',
      'editorOverviewRuler.border': '#7f7f7f4d',
      'editorError.foreground': '#f48771',
      'editorError.background': '#B73A3400',
      'editorError.border': '#ffffff00',
      'editorWarning.foreground': '#cca700',
      'editorWarning.background': '#A9904000',
      'editorWarning.border': '#ffffff00',
      'editorInfo.foreground': '#75beff',
      'editorInfo.background': '#4490BF00',
      'editorInfo.border': '#4490BF00',
      'editorGutter.background': palette.stale.hex(),
      'editorGutter.modifiedBackground': '#0c7d9d',
      'editorGutter.addedBackground': '#587c0c',
      'editorGutter.deletedBackground': '#94151b',
      'editorGutter.foldingControlForeground': '#c5c5c5',
      'editorCodeLens.foreground': '#999999',
      'editorGroup.border': '#444444',
      'diffEditor.insertedTextBackground': '#54db681c',
      'diffEditor.removedTextBackground': '#6b29296c',
      'diffEditor.border': '#444444',
      'panel.background': palette.stale.hex(),
      'panel.border': '#80808059',
      'panelTitle.activeBorder': '#e7e7e7',
      'panelTitle.activeForeground': '#e7e7e7',
      'panelTitle.inactiveForeground': '#e7e7e799',
      'badge.background': '#4d4d4d',
      'badge.foreground': '#ffffff',
      'terminal.foreground': '#cccccc',
      'terminal.selectionBackground': '#ffffff40',
      'terminalCursor.background': palette.cyan.hex(),
      'terminalCursor.foreground': '#ffffff',
      'terminal.border': '#80808059',
      'terminal.ansiBlack': '#000000',
      'terminal.ansiBlue': '#2472c8',
      'terminal.ansiBrightBlack': '#666666',
      'terminal.ansiBrightBlue': '#3b8eea',
      'terminal.ansiBrightCyan': '#29b8db',
      'terminal.ansiBrightGreen': '#23d18b',
      'terminal.ansiBrightMagenta': '#d670d6',
      'terminal.ansiBrightRed': '#f14c4c',
      'terminal.ansiBrightWhite': '#e5e5e5',
      'terminal.ansiBrightYellow': '#f5f543',
      'terminal.ansiCyan': '#11a8cd',
      'terminal.ansiGreen': '#0dbc79',
      'terminal.ansiMagenta': '#bc3fbc',
      'terminal.ansiRed': '#cd3131',
      'terminal.ansiWhite': '#e5e5e5',
      'terminal.ansiYellow': '#e5e510',
      'breadcrumb.background': palette.stale.hex(),
      'breadcrumb.foreground': '#cccccccc',
      'breadcrumb.focusForeground': '#e0e0e0',
      'editorGroupHeader.tabsBackground': palette.stale.hex(),
      'tab.activeForeground': '#ffffff',
      'tab.border': '#252526',
      'tab.activeBackground': palette.stale.darken(0.05).hex(),
      'tab.activeBorder': '#00000000',
      'tab.activeBorderTop': palette.cyan.hex(),
      'tab.inactiveBackground': palette.stale.hex(),
      'tab.inactiveForeground': '#ffffff80',
      'scrollbarSlider.background': '#79797966',
      'scrollbarSlider.hoverBackground': '#646464b3',
      'scrollbarSlider.activeBackground': '#bfbfbf66',
      'progressBar.background': palette.cyan.hex(),
      'widget.shadow': '#0000005c',
      'editorWidget.foreground': '#cccccc',
      'editorWidget.background': palette.stale.hex(),
      'editorWidget.resizeBorder': '#5F5F5F',
      'pickerGroup.border': '#3f3f46',
      'pickerGroup.foreground': palette.cyan.lighten(0.3).hex(),
      'debugToolBar.background': '#333333',
      'debugToolBar.border': '#474747',
      'notifications.foreground': '#cccccc',
      'notifications.background': palette.stale.hex(),
      'notificationToast.border': '#474747',
      'notificationsErrorIcon.foreground': '#f48771',
      'notificationsWarningIcon.foreground': '#cca700',
      'notificationsInfoIcon.foreground': '#75beff',
      'notificationCenter.border': palette.stale.lighten(0.3).hex(),
      'notificationCenterHeader.foreground': '#cccccc',
      'notificationCenterHeader.background': palette.stale.lighten(0.01).hex(),
      'notifications.border': palette.stale.lighten(0.1).hex(),
      'gitDecoration.addedResourceForeground': '#81b88b',
      'gitDecoration.conflictingResourceForeground': '#6c6cc4',
      'gitDecoration.deletedResourceForeground': '#c74e39',
      'gitDecoration.ignoredResourceForeground': '#8c8c8c',
      'gitDecoration.modifiedResourceForeground': '#e2c08d',
      'gitDecoration.stageDeletedResourceForeground': '#c74e39',
      'gitDecoration.stageModifiedResourceForeground': '#e2c08d',
      'gitDecoration.submoduleResourceForeground': '#8db9e2',
      'gitDecoration.untrackedResourceForeground': '#73c991',
      'editorMarkerNavigation.background': '#2d2d30',
      'editorMarkerNavigationError.background': '#f48771',
      'editorMarkerNavigationWarning.background': '#cca700',
      'editorMarkerNavigationInfo.background': '#75beff',
      'merge.currentHeaderBackground': '#367366',
      'merge.currentContentBackground': '#27403B',
      'merge.incomingHeaderBackground': '#395F8F',
      'merge.incomingContentBackground': '#28384B',
      'merge.commonHeaderBackground': '#383838',
      'merge.commonContentBackground': '#282828',
      'editorSuggestWidget.background': palette.stale.hex(),
      'editorSuggestWidget.border': palette.stale.lighten(0.1).hex(),
      'editorSuggestWidget.foreground': '#d4d4d4',
      'editorSuggestWidget.highlightForeground': palette.cyan.hex(),
      'editorSuggestWidget.selectedBackground': palette.cyan.darken(0.1).hex(),
      'editorHoverWidget.foreground': '#cccccc',
      'editorHoverWidget.background': palette.stale.hex(),
      'editorHoverWidget.border': palette.stale.lighten(0.1).hex(),
      'peekView.border': palette.cyan.hex(),
      'peekViewEditor.background': palette.cyan.darken(0.3).hex(),
      'peekViewEditorGutter.background': palette.cyan.darken(0.35).hex(),
      'peekViewEditor.matchHighlightBackground': '#ff8f0099',
      'peekViewEditor.matchHighlightBorder': '#ee931e',
      'peekViewResult.background': palette.stale.hex(),
      'peekViewResult.fileForeground': '#ffffff',
      'peekViewResult.lineForeground': '#bbbbbb',
      'peekViewResult.matchHighlightBackground': '#ea5c004d',
      'peekViewResult.selectionBackground': '#3399ff33',
      'peekViewResult.selectionForeground': '#ffffff',
      'peekViewTitle.background': palette.stale.lighten(0.06).hex(),
      'peekViewTitleDescription.foreground': '#ccccccb3',
      'peekViewTitleLabel.foreground': '#ffffff',
      'icon.foreground': '#cccccc',
      'checkbox.background': '#3c3c3c',
      'checkbox.foreground': '#cccccc',
      'checkbox.border': '#00000000',
      'dropdown.background': '#3c3c3c',
      'dropdown.foreground': '#cccccc',
      'dropdown.border': '#00000000',
      'minimapGutter.addedBackground': '#587c0c',
      'minimapGutter.modifiedBackground': '#0c7d9d',
      'minimapGutter.deletedBackground': '#94151b',
      'minimap.findMatchHighlight': '#515c6a',
      'minimap.selectionHighlight': '#264f78',
      'minimap.errorHighlight': '#f48771',
      'minimap.warningHighlight': '#cca700',
      'minimap.background': palette.stale.darken(0.02).hex(),
      'sideBar.dropBackground': '#383b3d',
      'editorGroup.emptyBackground': palette.stale.hex(),
      'panelSection.border': '#80808059',
      'statusBarItem.activeBackground': '#FFFFFF25',
      'settings.headerForeground': '#cccccc',
      'settings.focusedRowBackground': '#ffffff07',
      'walkThrough.embeddedEditorBackground': '#00000050',
      'breadcrumb.activeSelectionForeground': '#e0e0e0',
      'editorGutter.commentRangeForeground': '#c5c5c5',
      'debugExceptionWidget.background': '#333333',
      'debugExceptionWidget.border': '#474747'
    }
  }
}
