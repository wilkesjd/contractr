'use client'
import React from 'react';
import { signOutAction } from '@/app/actions';
import { useTimer } from 'react-timer-hook';




export default function MyTimer({ expiryTimestamp }: {expiryTimestamp:any}) {
  function handleExpire() {
    signOutAction();
  }
  const {
    seconds,
    minutes,
  } = useTimer({ expiryTimestamp, onExpire: () => handleExpire()});
  
  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '100px'}}>
        Account Locked! <br></br>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}