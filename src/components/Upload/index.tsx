import { createUseStyles } from 'react-jss'
import classnames from 'classnames'
import { Theme } from '../../constants/theme'

type UploadProps = Partial<{
  onFileChange: (file: Blob, preview: string, e: React.ChangeEvent<HTMLInputElement>) => any
  css: (theme: Theme) => React.CSSProperties
}>

type RuleNames = 'upload'

const useStyles = createUseStyles<RuleNames, Omit<UploadProps, 'onFileChange'>, Theme>(theme => ({
  upload: ({ css, ...props }) => ({
    ...props,
    cursor: ' pointer',
    ...css?.(theme),
  }),
}))

const Upload = ({
  onFileChange,
  children,
  css,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'label'> & UploadProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = (e.target.files as FileList)[0]
    onFileChange?.(file, URL.createObjectURL(file), e)
  }
  const classes = useStyles({
    css,
  })
  const computedClassNames = classnames(classes.upload, className)
  return (
    <label aria-label='file upload input' className={computedClassNames} {...props}>
      <input hidden type='file' onChange={handleFileChange} />
      {children || 'Upload'}
    </label>
  )
}

export default Upload
