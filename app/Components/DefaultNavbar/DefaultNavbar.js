'use client'
import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setShowSignInBox } from '@/app/redux/features/authSlice';


const style = {
  container: `flex items-center space-x-12`,
  headerLinks: `font-medium hover:opacity-60`,
  headerButton: `button-dark hover:bg-transparent`,
};

function DefaultNavbar() {
  const dispatch = useDispatch();
  return (
    <div className={style.container}>
      <Link className={style.headerLinks} href="/">
        Home
      </Link>
      <Link className={style.headerLinks} href="/projects">
        Projects
      </Link>
      <button onClick={() => dispatch(setShowSignInBox())} className={style.headerButton}>
        Sign In
      </button>
    </div>
  );
}

export default DefaultNavbar;
