import { Header, coursesColors } from "@/Components";
import { HomePage } from "@/Pages/HomePage";

function App() {
  console.log(coursesColors["backend"]);

  return (
    <>
      <Header />
      <HomePage></HomePage>
    </>
  );
}

export default App;
