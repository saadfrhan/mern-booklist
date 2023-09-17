import { Link } from 'react-router-dom';
import { buttonVariants } from './ui/button';
import { ArrowLeft } from 'lucide-react';

const BackButton = ({ destination }: { destination: string }) => {
  return (
    <Link
      to={destination}
      className={buttonVariants({
        size: 'icon',
      })}
    >
      <ArrowLeft className="text-2xl" />
    </Link>
  );
};

export default BackButton;
