import { Text } from '@/components/ui/Text'
import { MainLayout } from '@/components/layouts/MainLayout.tsx'

function App() {
  return (
    <MainLayout>
      <div className={'flex min-h-screen items-center justify-center'}>
        <Text>Hello World</Text>
      </div>
    </MainLayout>
  )
}

export default App
