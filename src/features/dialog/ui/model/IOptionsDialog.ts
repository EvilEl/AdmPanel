type NumberOrString = number | string

interface IOptionsDialog {
  width: NumberOrString
  minWidth: NumberOrString
  maxWidth: NumberOrString
  title: string
}

type OptionsDialogPartial = Partial<IOptionsDialog>

export type { IOptionsDialog, OptionsDialogPartial }
