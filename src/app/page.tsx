import AddNewCompanyButton from './components/add-new-company-button';
import MagicButton from './components/magic-button';

export default function HomePage() {
  return (
    <main>
      <h1 className="text-xl"> Home Page</h1>
      <AddNewCompanyButton />
      <MagicButton />
    </main>
  );
}
