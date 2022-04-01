import BootcampAddPage from 'components/bootcamp/BootcampAddPage'
import BootcampCreateComponent from 'components/bootcamp/CreatePageComponet'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'bg', [
      'common',
      'auth',
      'validation',
      'bootcamp',
      'admin',
      'documents',
    ])),
  },
})

export default function CreatePage() {
  return <BootcampAddPage />
}
