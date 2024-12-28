import { Button } from '@/components/ui/primitives/Button'
import { Strong, Text } from '@/components/ui/primitives/Text'

interface ConfirmButtonProps {
  label: string
  color?: 'red' | 'green' | 'blue'
  onClick: () => void
}

interface ConfirmProps {
  title: string
  message?: string
  confirm: ConfirmButtonProps
  cancel: ConfirmButtonProps
}

export const Confirm: React.FC<ConfirmProps> = ({
  title,
  message,
  confirm,
  cancel,
}) => {
  return (
    <div className={'flex flex-col gap-4'}>
      <Strong>{title}</Strong>
      {message && <Text>{message}</Text>}
      <div className={'flex gap-4'}>
        <Button color={confirm.color} onClick={confirm.onClick}>{confirm.label || 'Confirmar'}</Button>
        <Button color={cancel.color} onClick={cancel.onClick}>{cancel.label || 'Cancelar'}</Button>
      </div>
    </div>
  )
}
