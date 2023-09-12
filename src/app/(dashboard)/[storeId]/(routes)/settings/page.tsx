import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

import { Store } from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import axios from "axios";
import React from "react";
import { SettingsForm } from "./components/settings-form";

export const getServerSideProps: GetServerSideProps<{
  store: Store;
}> = async (context) => {
  const { params } = context;
  const storeId = params?.storeId;

  // Replace this with your server-side authentication logic
  const { userId } = auth();

  if (!userId) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  try {
    const res = await axios.get(`/api/stores/${storeId}`);

    return {
      props: { store: res.data },
    };
  } catch (err) {
    console.error(err);
    return {
      notFound: {},
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

const SettingsPage = async ({
  store,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initialData={store} />
      </div>
    </div>
  );
};

export default SettingsPage;
