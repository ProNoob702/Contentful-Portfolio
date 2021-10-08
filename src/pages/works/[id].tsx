import Layout from '../../components/layout';
import React from 'react';
import { WorkDetail } from '../../containers/works/workDetail';

// {params.id}
interface Props {
  params: { id: string };
}

const WorkDetailPage: React.FC<Props> = ({ params }) => {
  return (
    <Layout>
      <WorkDetail />
    </Layout>
  );
};

export default WorkDetailPage;
