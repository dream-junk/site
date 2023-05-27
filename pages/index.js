import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import style from '../src/app/globals.css';

export default function Home() {
  return (
    <main className="container y mandatory-scroll-snapping m-0">
        <nav>
            <div>TEAM</div>
            <div>PLAY</div>
            <div>SERVICES</div>
            <Link href="https://cry-mauve.vercel.app/"><div>NFT</div></Link>
        </nav>
        <section className="flex items-center justify-center">
          <Image src="/dreamjunk.png" alt="Dream Junk" height="300" width="300" className="main-logo"/>
        </section>
        <section className="one flex items-center justify-center">
          <span>1</span>
        </section>
        <section className="two flex items-center justify-center">
          <span>2</span>
        </section>
        <section className="three flex items-center justify-center">
          <span>3</span>
        </section>
        <section className="four flex items-center justify-center">
          <span>4</span>
        </section>
        <section className="five flex items-center justify-center">
          <span>5</span>
        </section>
        <section className="six flex items-center justify-center">
            <Image src="/finger.png" alt="Dream Junk" height="300" width="300" className="main-logo"/>
        </section>
    </main>
  )
}
