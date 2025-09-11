

import { PageLayout } from '../../Containers';
import OrderDetailsNewUi from './NewDetailPage';

interface OrderProps {
  page: string;
}

const NewOrders = ({ page }: OrderProps) => {


  return (
    <PageLayout>
      <>
        {page === 'newOrder' ? (
          <OrderDetailsNewUi />
        ) : (
          <></>
        )}
   
      </>
    </PageLayout>
  );
};

export default NewOrders;
