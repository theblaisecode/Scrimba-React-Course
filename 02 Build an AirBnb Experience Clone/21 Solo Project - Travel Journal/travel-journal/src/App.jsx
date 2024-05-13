import Header from "./components/Header";
import Post from "./components/Post";
import Footer from "./components/Footer";
import data from "./data";
import "./style.css";

export default function App() {
  const allPost = data.map((item) => {
    return <Post key={item.id} {...item} />;
  });

  return (
    <main>
      <Header />
      <section id="blog">{allPost}</section>
      <Footer />
    </main>
  );
}
