import { colors } from './colors.js'

export function theme(name: string, bordered?: boolean) {
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
    colors: {
      'foreground': '#cccccc',
      'focusBorder': colors.pelorous[400],
      'selection.background': colors.pelorous[800],
      'scrollbar.shadow': '#000000',
      'activityBar.foreground': colors.bunker[200],
      'activityBar.background': colors.bunker[950],
      'activityBar.inactiveForeground': colors.bunker[400],
      'activityBar.border': colors.bunker[900], // EDIT: here
      'activityBar.activeBorder': colors.pelorous[400], // EDIT: here
      'activityBar.activeFocusBorder': '#0000FF', // EDIT: here
      'activityBar.activeBackground': colors.bunker[900],
      'activityBarBadge.foreground': colors.bunker[900],
      'activityBarBadge.background': colors.pelorous[400],
      'sideBar.background': colors.bunker[900],
      'sideBar.foreground': '#cccccc',
      'sidebar.border': colors.bunker[900],
      'sideBarSectionHeader.background': '#00000000',
      'sideBarSectionHeader.foreground': '#cccccc',
      'sideBarSectionHeader.border': '#cccccc33',
      'sideBarTitle.foreground': '#bbbbbb',
      //'tree.indentGuidesStroke': palette.stale.lighten(0.05).hex(),
      'list.inactiveSelectionBackground': colors.bunker[800], // EDIT: here
      'list.inactiveSelectionForeground': '#cccccc',
      'list.hoverBackground': colors.bunker[800], // EDIT: here
      'list.hoverForeground': '#cccccc',
      'list.activeSelectionBackground': colors.bunker[800],
      'list.activeSelectionForeground': '#ffffff',
      'list.dropBackground': colors.bunker[800],
      'list.highlightForeground': colors.pelorous[400],
      'list.focusBackground': colors.bunker[800], // EDIT: here
      'list.focusForeground': '#cccccc',
      'listFilterWidget.background': '#653723',
      'listFilterWidget.outline': '#00000000',
      'listFilterWidget.noMatchesOutline': '#be1100',
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
      'input.background': colors.bunker[900],
      'input.border': '#00000000',
      'input.foreground': '#cccccc',
      'inputOption.activeBackground': colors.pelorous[400],
      'inputOption.activeForeground': colors.bunker[900],
      'inputOption.activeBorder': '#007acc00',
      'input.placeholderForeground': '#a6a6a6',
      'textLink.foreground': colors.pelorous[400],
      'textLink.activeForeground': colors.pelorous[500],
      'editor.background': colors.bunker[950],
      'editor.foreground': '#d4d4d4',
      'editorLineNumber.foreground': '#858585',
      'editorCursor.foreground': '#aeafad',
      'editorCursor.background': '#000000',
      'editor.selectionBackground': colors.pelorous[950],
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
      'editorGroup.border': '#444444',
      'diffEditor.insertedTextBackground': '#54db681c',
      'diffEditor.removedTextBackground': '#6b29296c',
      'diffEditor.border': '#444444',
      'panel.background': colors.bunker[950], // EDIT: here
      'panel.border': '#80808059',
      'panelTitle.activeBorder': colors.pelorous[400],
      'panelTitle.activeForeground': '#e7e7e7',
      'panelTitle.inactiveForeground': '#e7e7e799',
      'badge.background': '#4d4d4d',
      'badge.foreground': '#ffffff',
      'terminal.foreground': '#cccccc',
      'terminal.selectionBackground': '#ffffff40',
      'terminalCursor.background': colors.pelorous[400],
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
      'breadcrumb.background': colors.bunker[950],
      'breadcrumb.foreground': '#cccccccc',
      'breadcrumb.focusForeground': '#e0e0e0',
      'editorGroupHeader.tabsBackground': colors.bunker[900], // EDIT: here
      'tab.activeForeground': '#ffffff',
      'tab.border': '#252526',
      'tab.activeBackground': colors.bunker[800],
      'tab.activeBorder': '#00000000',
      'tab.activeBorderTop': colors.pelorous[400],
      'tab.inactiveBackground': colors.bunker[900],
      'tab.inactiveForeground': '#ffffff80',
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
      'checkbox.background': '#3c3c3c',
      'checkbox.foreground': '#cccccc',
      'checkbox.border': '#00000000',
      'dropdown.background': colors.bunker[900],
      'dropdown.foreground': '#cccccc',
      'dropdown.border': colors.bunker[800],
      'minimapGutter.addedBackground': '#587c0c',
      'minimapGutter.modifiedBackground': '#0c7d9d',
      'minimapGutter.deletedBackground': '#94151b',
      'minimap.findMatchHighlight': '#515c6a',
      'minimap.selectionHighlight': '#264f78',
      'minimap.errorHighlight': '#f48771',
      'minimap.warningHighlight': '#cca700',
      'minimap.background': colors.bunker[900], // EDIT: here
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
      'debugExceptionWidget.border': '#474747'

      /*       'radio.inactiveForeground': '',
      'radio.inactiveBackground': '',
      'radio.inactiveBorder': '',
      'radio.inactiveHoverBackground': '',
      'radio.activeBackground': colors.pelorous[400],
      'radio.activeForeground': colors.bunker[950],
      'radio.activeBorder': '' */
    }
  } as const
}
