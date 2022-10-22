import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Loader from 'components/Loader';
import LoginButton from 'components/LoginButton';
import useFirebase from 'hooks/useFirebase';

export default function LandingPage() {
  const { push } = useRouter();
  const { user } = useFirebase();

  useEffect(() => {
    if (user) {
      push('/vote');
    }
  }, [user, push]);

  return (
    <div className="fixed flex flex-col h-screen items-center justify-center space-y-12 w-screen">
      <h1 className="font-light text-8xl">🐐</h1>
      {user === null ? <LoginButton /> : <Loader />}
    </div>
  );
}

LandingPage.options = {
  head: { title: 'GOAT Picker' },
};
