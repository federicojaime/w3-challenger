import Nav from "./components/ui/Nav";
import UseContext from "./store/UseContext";
import Buscar from "./components/Buscar";
import Data from "./components/Data";

import Footer from "./components/ui/Footer";

const App = () => {
	return(
		<div className="min-h-svh flex flex-col gap-2">
			<Nav />
			<hr className="mb-4" />
			<div className="max-w-screen-lg w-full mx-auto flex-1">
				<UseContext>
					<Buscar />
					<Data />
				</UseContext>
			</div>
			<Footer />
		</div>
	);
};

export default App
