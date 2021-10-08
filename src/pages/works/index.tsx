import Layout from '../../components/layout';
import React from 'react';
import { WorksContent } from '../../containers/works/worksContent';

const WorksPage: React.FC<{}> = () => {
  return (
    <Layout>
      <WorksContent />
    </Layout>
  );
};

export default WorksPage;
