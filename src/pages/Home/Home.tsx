import { MainLayout } from '@/components/layouts/MainLayout.tsx'
import { Text } from '@/components/ui/Text'

export const Home = () => {
  return (
    <MainLayout>
      <div className={'flex flex-1 flex-col items-center justify-center gap-4'}>
        <Text>Home page</Text>
      </div>
    </MainLayout>
  )
}
