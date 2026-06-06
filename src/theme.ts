import { colors } from './colors.js'

export function theme(name: string) {
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
          foreground: '#5c6566'
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
          foreground: '#96e88f'
        }
      },
      {
        scope: ['entity.name.function'],
        settings: {
          foreground: '#96e88f' // EDIT: here
        }
      },
      {
        scope: ['entity.name.method'],
        settings: {
          foreground: '#bd98f2' // EDIT: here
        }
      },
      {
        name: 'Declared types',
        scope: ['entity.name.type.go'],
        settings: {
          foreground: '#86bad3'
        }
      },
      {
        name: 'Go builtin types',
        scope: ['support.type.builtin.go', 'support.type.go', 'storage.type.go'],
        settings: {
          foreground: '#aaf1f7'
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
          foreground: '#3885c9'
        }
      },

      {
        name: 'Keywords',
        scope: 'keyword',
        settings: {
          foreground: '#70e5f0'
        }
      },
      {
        name: 'Keyword "new"',
        scope: ['keyword.control.new', 'keyword.operator.new'],
        settings: {
          foreground: '#c09dff',
          fontStyle: 'bold'
        }
      },

      {
        scope: ['storage', 'storage.type'],
        settings: {
          foreground: '#5194d6'
        }
      },
      {
        name: 'Go builtin storage types',
        scope: [
          'storage.type.string.go',
          'storage.type.bool.go',
          'storage.type.byte.go',
          'storage.type.complex64.go',
          'storage.type.complex128.go',
          'storage.type.error.go',
          'storage.type.float32.go',
          'storage.type.float64.go',
          'storage.type.int.go',
          'storage.type.int8.go',
          'storage.type.int16.go',
          'storage.type.int32.go',
          'storage.type.int64.go',
          'storage.type.rune.go',
          'storage.type.uint.go',
          'storage.type.uint8.go',
          'storage.type.uint16.go',
          'storage.type.uint32.go',
          'storage.type.uint64.go',
          'storage.type.uintptr.go'
        ],
        settings: {
          foreground: '#4d8cca'
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
          foreground: '#bdd994' // EDIT: here
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
    semanticTokenColors: {
      type: '#2ecfe2',
      'type.defaultLibrary': '#4d8cca',
      'type:go': '#2ecfe2',
      'type.defaultLibrary:go': '#4d8cca',
      'type.declaration': '#86bad3',
      'type.declaration:go': '#86bad3',
      'struct.declaration': '#86bad3'
    },
    colors: {
      'foreground': '#cccccc',
      'focusBorder': colors.pelorous[400],
      'disabledForeground': '#cccccc99',
      'selection.background': colors.pelorous[800],
      'descriptionForeground': '#ccccccb3',
      'errorForeground': '#f48771',
      'scrollbar.shadow': '#000000',
      'sash.hoverBorder': colors.pelorous[400],
      'window.activeBorder': '#00000000',
      'window.inactiveBorder': colors.bunker[900],
      'activityBar.foreground': colors.bunker[200],
      'activityBar.background': colors.bunker[950],
      'activityBar.inactiveForeground': colors.bunker[400],
      'activityBar.border': colors.bunker[900], // EDIT: here
      'activityBar.activeBorder': colors.pelorous[400], // EDIT: here
      'activityBar.activeFocusBorder': colors.pelorous[500],
      'activityBar.activeBackground': colors.bunker[900],
      'activityBarBadge.foreground': colors.bunker[900],
      'activityBarBadge.background': colors.pelorous[400],
      'sideBar.background': colors.bunker[900],
      'sideBar.foreground': '#cccccc',
      'sideBar.border': colors.bunker[900],
      'sideBarSectionHeader.background': '#00000000',
      'sideBarSectionHeader.foreground': '#cccccc',
      'sideBarSectionHeader.border': '#cccccc33',
      'sideBarTitle.foreground': '#bbbbbb',
      'sideBarTitle.background': colors.bunker[900],
      'sideBarTitle.border': '#cccccc33',
      'sideBarStickyScroll.background': colors.bunker[900],
      'sideBarStickyScroll.border': '#cccccc33',
      //'tree.indentGuidesStroke': palette.stale.lighten(0.05).hex(),
      'list.inactiveSelectionBackground': colors.bunker[800], // EDIT: here
      'list.inactiveSelectionForeground': '#cccccc',
      'list.inactiveSelectionIconForeground': '#cccccc',
      'list.hoverBackground': colors.bunker[800], // EDIT: here
      'list.hoverForeground': '#cccccc',
      'list.activeSelectionBackground': colors.bunker[800],
      'list.activeSelectionForeground': '#ffffff',
      'list.activeSelectionIconForeground': '#ffffff',
      'list.dropBackground': colors.bunker[800],
      'list.highlightForeground': colors.pelorous[400],
      'list.focusBackground': colors.bunker[800], // EDIT: here
      'list.focusForeground': '#cccccc',
      'list.focusHighlightForeground': colors.pelorous[400],
      'list.focusOutline': colors.pelorous[400],
      'list.focusAndSelectionOutline': colors.pelorous[400],
      'list.inactiveFocusBackground': colors.bunker[800],
      'list.inactiveFocusOutline': colors.pelorous[400],
      'listFilterWidget.background': colors.bunker[800],
      'listFilterWidget.outline': '#00000000',
      'listFilterWidget.noMatchesOutline': '#be1100',
      'listFilterWidget.shadow': '#0000005c',
      'list.filterMatchBackground': '#ea5c0055',
      'list.filterMatchBorder': '#74879f',
      'statusBar.foreground': '#ffffff',
      'statusBar.background': colors.bunker[900],
      'statusBarItem.hoverBackground': colors.bunker[700],
      'statusBar.debuggingBackground': '#ffa172',
      'statusBar.debuggingForeground': colors.bunker[950],
      'statusBar.noFolderBackground': colors.bunker[900],
      'statusBar.noFolderForeground': '#ffffff',
      'statusBarItem.remoteBackground': colors.pelorous[400],
      'statusBarItem.remoteHoverBackground': colors.pelorous[500],
      'statusBarItem.remoteForeground': colors.bunker[950],
      'statusBarItem.remoteHoverForeground': colors.bunker[950],
      'titleBar.activeBackground': colors.bunker[950],
      'titleBar.activeForeground': '#cccccc',
      'titleBar.inactiveBackground': colors.bunker[900],
      'titleBar.inactiveForeground': '#cccccc99',
      'titleBar.border': '#00000000',
      'menubar.selectionForeground': '#cccccc',
      'menubar.selectionBackground': '#ffffff1a',
      'menu.foreground': '#cccccc',
      'menu.background': colors.bunker[900],
      'menu.selectionForeground': colors.bunker[950],
      'menu.selectionBackground': colors.pelorous[400],
      'menu.selectionBorder': '#00000000',
      'menu.separatorBackground': colors.bunker[700],
      'menu.border': colors.bunker[800],
      'button.background': colors.pelorous[400],
      'button.foreground': colors.bunker[950],
      'button.hoverBackground': colors.pelorous[500],
      'button.secondaryForeground': '#ffffff',
      'button.secondaryBackground': '#3a3d41',
      'button.secondaryHoverBackground': '#45494e',
      'button.border': '#00000000',
      'button.separator': '#ffffff1a',
      'button.secondaryBorder': '#00000000',
      'input.background': colors.bunker[900],
      'input.border': '#00000000',
      'input.foreground': '#cccccc',
      'inputOption.activeBackground': colors.pelorous[400],
      'inputOption.activeForeground': colors.bunker[900],
      'inputOption.activeBorder': '#007acc00',
      'inputOption.hoverBackground': '#ffffff1a',
      'input.placeholderForeground': '#a6a6a6',
      'inputValidation.errorBackground': '#94151b33',
      'inputValidation.errorForeground': '#f48771',
      'inputValidation.errorBorder': '#f48771',
      'inputValidation.warningBackground': '#cca70033',
      'inputValidation.warningForeground': '#cca700',
      'inputValidation.warningBorder': '#cca700',
      'inputValidation.infoBackground': '#75beff33',
      'inputValidation.infoForeground': '#75beff',
      'inputValidation.infoBorder': '#75beff',
      'textLink.foreground': colors.pelorous[400],
      'textLink.activeForeground': colors.pelorous[500],
      'editor.background': colors.bunker[950],
      'editor.foreground': '#d4d4d4',
      'editorLineNumber.foreground': '#858585',
      'editorCursor.foreground': '#aeafad',
      'editorCursor.background': '#000000',
      'editor.selectionBackground': '#16738866',
      'editor.inactiveSelectionBackground': '#16738833',
      'editorWhitespace.foreground': '#e3e4e229',
      'editor.selectionHighlightBackground': '#2ecfe226',
      'editor.selectionHighlightBorder': '#167388',
      'editor.findMatchBackground': '#16738899',
      'editor.findMatchForeground': '#d4d4d4',
      'editor.findMatchBorder': '#2ecfe2',
      'editor.findMatchHighlightBackground': '#16738855',
      'editor.findMatchHighlightBorder': '#128fa866',
      'editor.findRangeHighlightBackground': '#3a3d4166',
      'editor.findRangeHighlightBorder': '#ffffff00',
      'editor.rangeHighlightBackground': '#2ecfe214',
      'editor.rangeHighlightBorder': '#ffffff00',
      'editor.hoverHighlightBackground': '#16738840',
      'editor.wordHighlightStrongBackground': '#128fa866',
      'editor.wordHighlightBackground': '#2ecfe233',
      'editor.lineHighlightBackground': '#ffffff0A',
      'editor.lineHighlightBorder': '#282828',
      'editorLineNumber.activeForeground': '#c6c6c6',
      'editorLink.activeForeground': colors.pelorous[400], // EDIT: here
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
      'editorGutter.background': colors.bunker[950],
      'editorGutter.modifiedBackground': '#0c7d9d',
      'editorGutter.addedBackground': '#587c0c',
      'editorGutter.deletedBackground': '#94151b',
      'editorGutter.foldingControlForeground': '#c5c5c5',
      'editorCodeLens.foreground': '#999999',
      'editorMultiCursor.primary.foreground': '#aeafad',
      'editorMultiCursor.primary.background': '#000000',
      'editorMultiCursor.secondary.foreground': '#aeafad',
      'editorMultiCursor.secondary.background': '#000000',
      'editorGroup.border': colors.bunker[700],
      'editorGroup.dropBackground': '#383b3d',
      'diffEditor.insertedTextBackground': '#54db681c',
      'diffEditor.removedTextBackground': '#6b29296c',
      'diffEditor.border': '#444444',
      'panel.background': colors.bunker[950], // EDIT: here
      'panel.border': colors.bunker[700],
      'panelTitle.border': colors.bunker[700],
      'panelTitle.activeBorder': colors.pelorous[400],
      'panelTitle.activeForeground': '#e7e7e7',
      'panelTitle.inactiveForeground': '#e7e7e799',
      'badge.background': '#4d4d4d',
      'badge.foreground': '#ffffff',
      'terminal.foreground': '#cccccc',
      'terminal.background': colors.bunker[950],
      'terminal.selectionBackground': '#ffffff40',
      'terminal.inactiveSelectionBackground': '#ffffff40',
      'terminalCursor.background': colors.pelorous[400],
      'terminalCursor.foreground': '#ffffff',
      'terminal.border': '#80808059',
      'terminal.findMatchBackground': '#16738899',
      'terminal.findMatchBorder': '#2ecfe2',
      'terminal.findMatchHighlightBackground': '#16738855',
      'terminal.findMatchHighlightBorder': '#128fa866',
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
      'breadcrumb.background': colors.bunker[950],
      'breadcrumb.foreground': '#cccccccc',
      'breadcrumb.focusForeground': '#e0e0e0',
      'tree.indentGuidesStroke': '#404040',
      'tree.inactiveIndentGuidesStroke': '#404040',
      'editorGroupHeader.tabsBackground': colors.bunker[900], // EDIT: here
      'editorGroupHeader.noTabsBackground': colors.bunker[900],
      'editorGroupHeader.tabsBorder': colors.bunker[700],
      'tab.activeForeground': '#ffffff',
      'tab.border': '#252526',
      'tab.activeBackground': colors.bunker[800],
      'tab.activeBorder': '#00000000',
      'tab.activeBorderTop': colors.pelorous[400],
      'tab.hoverBackground': colors.bunker[800],
      'tab.hoverForeground': '#ffffff',
      'tab.inactiveBackground': colors.bunker[900],
      'tab.inactiveForeground': '#ffffff80',
      'tab.unfocusedActiveBackground': colors.bunker[800],
      'tab.unfocusedActiveForeground': '#ffffff',
      'tab.unfocusedActiveBorderTop': colors.pelorous[500],
      'tab.unfocusedInactiveForeground': '#ffffff80',
      'scrollbarSlider.background': '#79797966',
      'scrollbarSlider.hoverBackground': '#646464b3',
      'scrollbarSlider.activeBackground': '#bfbfbf66',
      'progressBar.background': colors.pelorous[400],
      'widget.shadow': '#0000005c',
      'editorWidget.foreground': '#cccccc',
      'editorWidget.background': colors.bunker[900],
      'editorWidget.resizeBorder': '#5F5F5F',
      'pickerGroup.border': '#3f3f46',
      'pickerGroup.foreground': colors.pelorous[400],
      'debugToolBar.background': '#333333',
      'debugToolBar.border': '#474747',
      'notifications.foreground': '#cccccc',
      'notifications.background': colors.bunker[900],
      'notificationToast.border': '#474747',
      'notificationsErrorIcon.foreground': '#f48771',
      'notificationsWarningIcon.foreground': '#cca700',
      'notificationsInfoIcon.foreground': '#75beff',
      'notificationCenter.border': colors.bunker[800],
      'notificationCenterHeader.foreground': '#cccccc',
      'notificationCenterHeader.background': colors.bunker[800],
      'notifications.border': colors.bunker[700],
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
      'editorOverviewRuler.findMatchForeground': '#16738899',
      'editorOverviewRuler.selectionHighlightForeground': '#2ecfe226',
      'editorOverviewRuler.modifiedForeground': '#0c7d9d',
      'editorOverviewRuler.addedForeground': '#587c0c',
      'editorOverviewRuler.deletedForeground': '#94151b',
      'merge.currentHeaderBackground': '#367366',
      'merge.currentContentBackground': '#27403B',
      'merge.incomingHeaderBackground': '#395F8F',
      'merge.incomingContentBackground': '#28384B',
      'merge.commonHeaderBackground': '#383838',
      'merge.commonContentBackground': '#282828',
      'editorSuggestWidget.background': colors.bunker[900],
      'editorSuggestWidget.border': colors.bunker[800],
      'editorSuggestWidget.foreground': '#d4d4d4',
      'editorSuggestWidget.highlightForeground': colors.pelorous[400],
      'editorSuggestWidget.selectedBackground': colors.pelorous[800],
      'editorHoverWidget.foreground': '#cccccc',
      'editorHoverWidget.background': colors.bunker[900],
      'editorHoverWidget.border': colors.bunker[700],
      'peekView.border': colors.pelorous[400],
      'peekViewEditor.background': colors.pelorous[950], // EDIT: here
      'peekViewEditorGutter.background': colors.pelorous[950], // EDIT: here
      'peekViewEditor.matchHighlightBackground': '#ff8f0099',
      'peekViewEditor.matchHighlightBorder': '#ee931e',
      'peekViewResult.background': colors.bunker[900],
      'peekViewResult.fileForeground': '#ffffff',
      'peekViewResult.lineForeground': '#bbbbbb',
      'peekViewResult.matchHighlightBackground': '#ea5c004d',
      'peekViewResult.selectionBackground': '#3399ff33',
      'peekViewResult.selectionForeground': '#ffffff',
      'peekViewTitle.background': colors.bunker[800],
      'peekViewTitleDescription.foreground': '#ccccccb3',
      'peekViewTitleLabel.foreground': '#ffffff',
      'icon.foreground': '#cccccc',
      'checkbox.background': colors.bunker[900],
      'checkbox.foreground': '#cccccc',
      'checkbox.border': '#00000000',
      'radio.inactiveForeground': '#cccccc',
      'radio.inactiveBackground': colors.bunker[900],
      'radio.inactiveBorder': colors.bunker[800],
      'radio.inactiveHoverBackground': colors.bunker[800],
      'radio.activeBackground': colors.pelorous[400],
      'radio.activeForeground': colors.bunker[950],
      'radio.activeBorder': '#00000000',
      'dropdown.background': colors.bunker[900],
      'dropdown.foreground': '#cccccc',
      'dropdown.border': colors.bunker[700],
      'dropdown.listBackground': colors.bunker[900],
      'minimapGutter.addedBackground': '#587c0c',
      'minimapGutter.modifiedBackground': '#0c7d9d',
      'minimapGutter.deletedBackground': '#94151b',
      'minimap.findMatchHighlight': '#16738899',
      'minimap.selectionHighlight': '#16738866',
      'minimap.selectionOccurrenceHighlight': '#2ecfe226',
      'minimap.errorHighlight': '#f48771',
      'minimap.warningHighlight': '#cca700',
      'minimap.background': colors.bunker[900], // EDIT: here
      'minimapSlider.background': '#79797966',
      'minimapSlider.hoverBackground': '#646464b3',
      'minimapSlider.activeBackground': '#bfbfbf66',
      'sideBar.dropBackground': '#383b3d',
      'editorGroup.emptyBackground': colors.bunker[950], // EDIT: here
      'panelSection.border': '#80808059',
      'statusBarItem.activeBackground': '#FFFFFF25',
      'settings.headerForeground': '#cccccc',
      'settings.focusedRowBackground': '#ffffff07',
      'walkThrough.embeddedEditorBackground': '#00000050',
      'breadcrumb.activeSelectionForeground': '#e0e0e0',
      'editorGutter.commentRangeForeground': '#c5c5c5',
      'debugExceptionWidget.background': '#333333',
      'debugExceptionWidget.border': '#474747',
      'searchEditor.findMatchBackground': '#16738899',
      'searchEditor.findMatchBorder': '#2ecfe2'
    }
  } as const
}
