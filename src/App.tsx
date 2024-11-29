import { Text } from '@/components/ui/Text'
import { MainLayout } from '@/components/layouts/MainLayout.tsx'

function App() {
  return (
    <MainLayout>
      <div className={'flex flex-1 flex-col gap-4 items-center justify-center'}>
        <Text>Home page</Text>
      </div>
    </MainLayout>
  )
}

export default App
