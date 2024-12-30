import Navbar from "@/components/global/navbar/navbar";
import Sidebar from "@/components/global/sidebar";
import React from "react";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import {
  PrefetchUserAutomations,
  PrefetchUserProfile,
} from "@/react-query/prefetch";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

async function Layout({ children, params }: Props) {
  //Query clients- using react query, optimistic UI, caching
  //library - to prefetch data, optimistic ui, caching etc

  const query = new QueryClient();

  //helper fn to prefetch data
  await PrefetchUserProfile(query);

  await PrefetchUserAutomations(query);

  //to access server side cache we need to wrap layout in HydrationBoundary
  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="p-3">
        <Sidebar slug={params.slug} />
        <div
          className="lg:ml-[250px]
            lg:pl-10
            lg:py-5
            flex
            flex-col
            overflow-auto"
        >
          <Navbar slug={params.slug} />
          {children}
        </div>
      </div>
    </HydrationBoundary>
  );
}

export default Layout;
