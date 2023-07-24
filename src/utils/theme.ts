import { colors } from './colors.js'

import type { Theme } from '#/types/theme'

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
          foreground: '#32a1d7'
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
          foreground: '#32a1d7'
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
        scope: 'keyword',
        settings: {
          foreground: '#70a8b5'
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
        scope: [
          'string',
          'punctuation.definition.string',
          'string punctuation.section.embedded source'
        ],
        settings: {
          foreground: '#bbe488'
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
      'focusBorder': colors('cyan-500'),
      'selection.background': colors('cyan-500', {
        type: 'darken',
        amount: 0.3
      }),
      'scrollbar.shadow': '#000000',
      'activityBar.foreground': colors('white', {
        type: 'darken',
        amount: 0.1
      }),
      'activityBar.background': colors('blue-500'),
      'activityBar.inactiveForeground': colors('white', {
        type: 'darken',
        amount: 0.5
      }),
      'activityBar.activeBorder': colors('cyan-500'),
      'activityBar.activeFocusBorder': colors('blue-500'),
      'activityBarBadge.foreground': '#ffffff',
      'activityBarBadge.background': colors('cyan-500'),
      'sideBar.background': colors('blue-500', {
        amount: 0.02
      }),
      'sideBar.foreground': '#cccccc',
      'sideBarSectionHeader.background': '#00000000',
      'sideBarSectionHeader.foreground': '#cccccc',
      'sideBarSectionHeader.border': '#cccccc33',
      'sideBarTitle.foreground': '#bbbbbb',
      'list.inactiveSelectionBackground': '#37373d',
      'list.inactiveSelectionForeground': '#cccccc',
      'list.hoverBackground': colors('white', {
        type: 'darken',
        amount: 0.7
      }),
      'list.hoverForeground': '#cccccc',
      'list.activeSelectionBackground': colors('blue-500'),
      'list.activeSelectionForeground': '#ffffff',
      'tree.indentGuidesStroke': '#585858',
      'list.dropBackground': '#383b3d',
      'list.highlightForeground': colors('cyan-500'),
      'list.focusBackground': colors('cyan-500', {
        type: 'darken',
        amount: 0.2
      }),
      'list.focusForeground': '#cccccc',
      'listFilterWidget.background': '#653723',
      'listFilterWidget.outline': '#00000000',
      'listFilterWidget.noMatchesOutline': '#be1100',
      'statusBar.foreground': '#ffffff',
      'statusBar.background': colors('blue-500'),
      'statusBarItem.hoverBackground': '#ffffff1f',
      'statusBar.debuggingBackground': colors('orange-500'),
      'statusBar.debuggingForeground': '#ffffff',
      'statusBar.noFolderBackground': colors('blue-500', {
        amount: 0.1
      }),
      'statusBar.noFolderForeground': '#ffffff',
      'statusBarItem.remoteBackground': colors('cyan-500'),
      'statusBarItem.remoteForeground': '#ffffff',
      'titleBar.activeBackground': colors('blue-500'),
      'titleBar.activeForeground': '#cccccc',
      'titleBar.inactiveBackground': colors('blue-500', {
        type: 'darken',
        amount: 0.04
      }),
      'titleBar.inactiveForeground': '#cccccc99',
      'titleBar.border': '#00000000',
      'menubar.selectionForeground': '#cccccc',
      'menubar.selectionBackground': '#ffffff1a',
      'menu.foreground': '#cccccc',
      'menu.background': colors('blue-500'),
      'menu.selectionForeground': '#ffffff',
      'menu.selectionBackground': colors('cyan-500'),
      'menu.selectionBorder': '#00000000',
      'menu.separatorBackground': colors('blue-500', {
        amount: 0.05
      }),
      'menu.border': colors('blue-500', {
        amount: 0.1
      }),
      'button.background': colors('cyan-500'),
      'button.foreground': '#ffffff',
      'button.hoverBackground': colors('cyan-500', {
        amount: 0.1
      }),
      'button.secondaryForeground': '#ffffff',
      'button.secondaryBackground': '#3a3d41',
      'button.secondaryHoverBackground': '#45494e',
      'input.background': colors('blue-500'),
      'input.border': '#00000000',
      'input.foreground': '#cccccc',
      'inputOption.activeBackground': colors('cyan-500', {
        amount: 0.1
      }),
      'inputOption.activeBorder': '#007acc00',
      'inputOption.activeForeground': '#ffffff',
      'input.placeholderForeground': '#a6a6a6',
      'textLink.foreground': colors('cyan-500'),
      'editor.background': colors('blue-500'),
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
      'editorLink.activeForeground': '#4e94ce',
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
      'editorGutter.background': colors('blue-500'),
      'editorGutter.modifiedBackground': '#0c7d9d',
      'editorGutter.addedBackground': '#587c0c',
      'editorGutter.deletedBackground': '#94151b',
      'editorGutter.foldingControlForeground': '#c5c5c5',
      'editorCodeLens.foreground': '#999999',
      'editorGroup.border': '#444444',
      'diffEditor.insertedTextBackground': '#54db681c',
      'diffEditor.removedTextBackground': '#6b29296c',
      'diffEditor.border': '#444444',
      'panel.background': colors('blue-500'),
      'panel.border': '#80808059',
      'panelTitle.activeBorder': '#e7e7e7',
      'panelTitle.activeForeground': '#e7e7e7',
      'panelTitle.inactiveForeground': '#e7e7e799',
      'badge.background': '#4d4d4d',
      'badge.foreground': '#ffffff',
      'terminal.foreground': '#cccccc',
      'terminal.selectionBackground': '#ffffff40',
      'terminalCursor.background': colors('cyan-500'),
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
      'breadcrumb.background': colors('blue-500'),
      'breadcrumb.foreground': '#cccccccc',
      'breadcrumb.focusForeground': '#e0e0e0',
      'editorGroupHeader.tabsBackground': colors('blue-500'),
      'tab.activeForeground': '#ffffff',
      'tab.border': '#252526',
      'tab.activeBackground': colors('blue-500', {
        type: 'darken',
        amount: 0.05
      }),
      'tab.activeBorder': '#00000000',
      'tab.activeBorderTop': colors('cyan-500'),
      'tab.inactiveBackground': colors('blue-500'),
      'tab.inactiveForeground': '#ffffff80',
      'scrollbarSlider.background': '#79797966',
      'scrollbarSlider.hoverBackground': '#646464b3',
      'scrollbarSlider.activeBackground': '#bfbfbf66',
      'progressBar.background': colors('cyan-500'),
      'widget.shadow': '#0000005c',
      'editorWidget.foreground': '#cccccc',
      'editorWidget.background': colors('blue-500'),
      'editorWidget.resizeBorder': '#5F5F5F',
      'pickerGroup.border': '#3f3f46',
      'pickerGroup.foreground': colors('cyan-500', {
        amount: 0.3
      }),
      'debugToolBar.background': '#333333',
      'debugToolBar.border': '#474747',
      'notifications.foreground': '#cccccc',
      'notifications.background': colors('blue-500'),
      'notificationToast.border': '#474747',
      'notificationsErrorIcon.foreground': '#f48771',
      'notificationsWarningIcon.foreground': '#cca700',
      'notificationsInfoIcon.foreground': '#75beff',
      'notificationCenter.border': colors('blue-500', {
        amount: 0.3
      }),
      'notificationCenterHeader.foreground': '#cccccc',
      'notificationCenterHeader.background': colors('blue-500', {
        amount: 0.01
      }),
      'notifications.border': colors('blue-500', {
        amount: 0.1
      }),
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
      'editorSuggestWidget.background': colors('blue-500'),
      'editorSuggestWidget.border': colors('blue-500', {
        amount: 0.1
      }),
      'editorSuggestWidget.foreground': '#d4d4d4',
      'editorSuggestWidget.highlightForeground': colors('cyan-500'),
      'editorSuggestWidget.selectedBackground': colors('cyan-500', {
        type: 'darken',
        amount: 0.1
      }),
      'editorHoverWidget.foreground': '#cccccc',
      'editorHoverWidget.background': colors('blue-500'),
      'editorHoverWidget.border': colors('blue-500', {
        amount: 0.1
      }),
      'peekView.border': colors('cyan-500'),
      'peekViewEditor.background': colors('cyan-500', {
        type: 'darken',
        amount: 0.3
      }),
      'peekViewEditorGutter.background': colors('cyan-500', {
        type: 'darken',
        amount: 0.35
      }),
      'peekViewEditor.matchHighlightBackground': '#ff8f0099',
      'peekViewEditor.matchHighlightBorder': '#ee931e',
      'peekViewResult.background': colors('blue-500'),
      'peekViewResult.fileForeground': '#ffffff',
      'peekViewResult.lineForeground': '#bbbbbb',
      'peekViewResult.matchHighlightBackground': '#ea5c004d',
      'peekViewResult.selectionBackground': '#3399ff33',
      'peekViewResult.selectionForeground': '#ffffff',
      'peekViewTitle.background': colors('blue-500', {
        amount: 0.06
      }),
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
      'minimap.background': colors('blue-500', {
        type: 'darken',
        amount: 0.02
      }),
      'sideBar.dropBackground': '#383b3d',
      'editorGroup.emptyBackground': colors('blue-500'),
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
