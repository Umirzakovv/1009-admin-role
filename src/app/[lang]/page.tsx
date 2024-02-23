import Header from "@/@core/components/dashboard/Header";
import DashboardTab from "@/@core/components/dashboard/tab";
import Container from "@/@core/components/reusable/Container";

export default function Home() {
  return (
    <main className="p-8">
      <Container>
        <Header />
        <DashboardTab />
      </Container>
    </main>
  );
}
