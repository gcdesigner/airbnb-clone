import { Container, Main, Sidebar, Wrapper } from './styles';

import Breadcrumb from '@/components/RoomDetails/Breadcrumb';
import SectionAvailability from '@/components/RoomDetails/SectionAvailability';
import SectionBeds from '@/components/RoomDetails/SectionBeds';
import SectionComments from '@/components/RoomDetails/SectionComments';
import SectionConfort from '@/components/RoomDetails/SectionConfort';
import SectionDescription from '@/components/RoomDetails/SectionDescription';
import SectionDetails from '@/components/RoomDetails/SectionDetails';
import SectionHostProfile from '@/components/RoomDetails/SectionHostProfile';
import SectionNeighborhood from '@/components/RoomDetails/SectionNeighborhood';
import SectionSummary from '@/components/RoomDetails/SectionSummary';
import SectionThingsToRemember from '@/components/RoomDetails/SectionThingsToRemember';
import BookForm from '@/components/RoomDetails/Sidebar';
import GalleryHeader from '@/components/shared/GalleryHeader';
import Header from '@/components/shared/Header';

import Footer from '@/components/shared/Footer';
import SimilarListings from '@/components/shared/SimilarListings';

export default function RoomDetails() {
  return (
    <Container>
      <Breadcrumb />
      <Header />
      <GalleryHeader />
      <Wrapper>
        <Main id="main">
          <SectionSummary />
          <SectionDetails />
          <SectionDescription />
          <SectionConfort />
          <SectionBeds />
          <SectionAvailability />
          <SectionComments />
          <SectionHostProfile />
          <SectionNeighborhood />
          <SectionThingsToRemember />
        </Main>
        <Sidebar id="sidebar">
          <BookForm />
        </Sidebar>
      </Wrapper>

      <SimilarListings />

      <Footer />
    </Container>
  );
}
