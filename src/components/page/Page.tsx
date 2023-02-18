import Footer from '../footer/Footer';
import Header from '../header/Header';

type PageProps = {
  children: React.ReactNode;
};

function Page({ children }: PageProps) {
  return (
    <>
      <Header />
      <main className="section">{children}</main>
      <Footer />
    </>
  );
}

export default Page;
