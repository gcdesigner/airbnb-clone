import SectionBannerAction from '@/components/Home/SectionBannerAction';
import SectionHeader from '@/components/Home/SectionHeader';
import SectionRecentReserved from '@/components/Home/SectionRecentReserved';
import SectionTopReated from '@/components/Home/SectionTopReated';
import SectionValuesProps from '@/components/Home/SectionValuesProps';
import Content from '@/components/shared/Content';
import Footer from '@/components/shared/Footer';

import { Breadcrumb, Container } from './styles';

export default function Home() {
  return (
    <Container>
      <SectionHeader />
      <Content>
        <Breadcrumb>
          <a href="/">United States</a>
          <small>Aluguéis por Temporada em Estados Unidos</small>
        </Breadcrumb>

        <SectionTopReated />
        <SectionValuesProps />
        <SectionRecentReserved />
        <SectionBannerAction />
      </Content>
      <Footer />
    </Container>
  );
}
