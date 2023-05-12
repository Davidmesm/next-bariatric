import * as React from 'react';

export interface ICatalogParams {
    catalogName: string
}

export interface ICatalogPageProps {
    params: ICatalogParams
}

export default function CatalogPage (props: ICatalogPageProps) {


  return (
    <div>
        Catalog: {props.params.catalogName}
    </div>
  );
}
