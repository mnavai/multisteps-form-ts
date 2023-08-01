import { Routes, Route } from 'react-router-dom';
import YourInfo from './pages/YourInfo.tsx';
import SelectPlan from './pages/SelectPlan.tsx';
import AddOns from './pages/AddOns.tsx';
import Summary from './pages/Summary.tsx';
import ThankYou from './pages/ThankYou.tsx';
import NotFound from './pages/NotFound.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<YourInfo />} />
        <Route path='/select-plan' element={<SelectPlan />} />
        <Route path='/add-ons' element={<AddOns />} />
        <Route path='/summary' element={<Summary />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};
export default App;
