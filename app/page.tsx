import Image from 'next/image'

import React, { useState, useEffect } from "react";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex items-center justify-center w-full">
        <Image src="/dreamjunk.png" alt="Dream Junk" height="300" width="300" className="main-logo"/>
      </div>
    </main>
  )
}
